import { Box, Button, Center, CircularProgress, Flex, Text } from "@chakra-ui/react";
import Question from "./Question";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { QuestionContext } from "../Context/QuestionContext";
import { Texts } from "../../utils";

function Questions() {
  const navigate = useNavigate()
  const { attempt, setAttempt, formatQuestions, questions } = useContext(QuestionContext)
  useEffect(() => {
    const getQuestionsData = async () => {
      const response = await fetch('https://ivd6hpenglgsx6qyvadcs2zteu0zwmcw.lambda-url.us-east-1.on.aws/Questions_Tagueamento');
      const data = await response.json();
      return data;
    }
    getQuestionsData().then(data => formatQuestions(data))
  }, []);

  const giveFeedback = () => {
    setAttempt(attempt + 1)
    navigate('/feedback')
  }
  return (
    <Box mr={8}>
      <Box pt={10}>
        <Text fontSize={15} pb={5}>{Texts.WELCOME_TEXT}</Text>
        {questions?.questions.length > 0 ? <>
          <Text pb={5} fontWeight={'bold'}>Tentativa {attempt} de 3</Text>
          {questions.questions.map((value, index) => (
            <Box key={index}>
              <Question data={value} key={index} position={value?.position as number} />
              <Box pb={5}></Box>
            </Box>
          ))}
        </>
          :
          <Center mt={10}><CircularProgress isIndeterminate color='#004ba0' size={20}/></Center>
        }

      </Box>
      {questions?.questions.length > 0 && <>
        <hr />
        <Flex
          justifyContent={'flex-end'}
        >
          <Button
            bg={'#004ba0'}
            color={'white'}
            my={5}
            onClick={giveFeedback}
          >
            Concluir
          </Button>
        </Flex>
      </>}
    </Box>
  )
}

export default Questions