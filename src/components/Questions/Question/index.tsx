import { Box, Flex, Radio, RadioGroup, Text } from "@chakra-ui/react";
import { Question as QuestionType } from "../../../utils/types";
import { QuestionContext } from "../../Context/QuestionContext";
import { useContext } from "react";

type QuestionsProp = {
   data: QuestionType;
   position: number;
}

export default function Question({ data, position }: QuestionsProp) {
    const {wrongQuestion, setWrongQuestion} = useContext(QuestionContext)
    const checkIfIsCorrect = (questionText: string): boolean => {
        const chosenOption = data?.options.filter((option) => questionText === option.text)[0]
        const containQuestion = wrongQuestion.some((question) => question === data.questionId);
        if (!chosenOption.isCorrect && !containQuestion) {
            setWrongQuestion([...wrongQuestion, data.questionId])
        }
        if (chosenOption.isCorrect && containQuestion) {
            setWrongQuestion(wrongQuestion.filter((question) => question !== data.questionId))
        }
        return chosenOption.isCorrect
    }
    return (
        <>  
        <Box 
            fontSize={12}
            textAlign={"justify"}
            bg={'#f8f9fa'}
            p={5}
            pl={15}
            pr={15}
        >
            <Text fontSize={15} pb={5}>{position+1}. {data.question}</Text>
            <Text fontSize={15} fontWeight={'bold'} pb={5}>Alternativas:</Text>
            <RadioGroup onChange={(selectedAnswer) => checkIfIsCorrect(selectedAnswer)}>
            {data && data?.options.map((value, index) => (
                <Flex direction={'column'} py={2}>
                    <Radio 
                        size='sm' 
                        colorScheme='blue'
                        key={index} 
                        value={value.text}
                    >
                        <Text fontSize={14}>{value.text}</Text>
                    </Radio>
                </Flex>
            ))}  
            </RadioGroup>
        </Box>
        </>
    )
}