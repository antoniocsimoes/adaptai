import { Box, Button, Center, CircularProgress, Flex, Link, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { QuestionContext } from "../Context/QuestionContext";
import { FeedbackResume, Texts } from "../../utils";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from 'react-icons/go';

const Feedback: React.FC = () => {
    const navigate = useNavigate()
    const { wrongQuestion, setWrongQuestion, attempt, setAttempt, questions } = useContext(QuestionContext)
    const [feedbacks, setFeedbacks] = useState<FeedbackResume>({
        feedbacks: []
    })
    useEffect(() => {
        getQuestions()
        const sendFeedbackReport = async () => {
            const response = await fetch('https://vv9jq4v2kk.execute-api.us-east-1.amazonaws.com/default/Feedbacks_Tagueamento', {
                method: 'POST', body: JSON.stringify({ questionIds: wrongQuestion }), headers: {
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            return data;
        }
        sendFeedbackReport().then(data => setFeedbacks(data))
    }, []);

    const getQuestions = () => {
        const questionsToDisplay = questions?.questions.map((a) => ({ question: a.question, questionId: a.questionId }));
        const questionsToFind = questionsToDisplay.filter((item) => wrongQuestion.includes(item.questionId));
        return questionsToFind;
    }

    const getTextFromQuestions = (questionId: number) => {
        const qs = getQuestions();
        const questionObj = qs.filter((question) => question.questionId === questionId)[0]
        return questionObj.question
    }

    const goBackToQuestions = () => {
        setWrongQuestion([])
        navigate('/questions')
    }

    const endQuestions = () => {
        setAttempt(1)
        navigate('/questions')
    }
    return <Box mr={8}>
        <Box pt={10}>
            {
                wrongQuestion.length === 0
                    ?
                    <>
                        <Center
                            bg='#1b7f12'
                            color='white'
                            borderRadius={'4px'}
                            p={5}
                            fontWeight={700}
                            textAlign={'justify'}
                        >
                            {Texts.TOTAL_SUCCESS_FEEDBACK}
                        </Center>
                        <Flex
                            my={10}
                            justifyContent={'flex-end'}
                        >
                            <Button
                                onClick={endQuestions}
                                bg={'#004ba0'}
                                color={'#fff'}>
                                Finalizar questionário
                            </Button>
                        </Flex>
                    </>
                    :
                    <>
                        <Center bg='#62bf51'
                            color='white'
                            borderRadius={'4px'}
                            p={5}
                            fontWeight={700}
                            textAlign={'justify'}
                            mb={5}
                        >
                            {Texts.PARTIAL_SUCCESS_FEEDBACK}
                        </Center>
                        <Box>
                            <Text fontWeight={700} my={8} fontSize={24}>Sugestões de material de reforço:</Text>
                            {feedbacks ? feedbacks?.feedbacks.map((value) => (
                                <>
                                    <Text textAlign={'justify'}><b>Questão para revisar:</b> {getTextFromQuestions(value.questionId)}</Text>
                                    {value.suggestions && value.suggestions.map((suggestion, index) => (
                                        suggestion.content.map((elem: any) => (
                                            <Flex flexDirection={'row'} my={5}>
                                                <Link href={elem} key={index} color={'blue.500'} isExternal>
                                                    {suggestion.type === 'html' ? 'Clique aqui e revise o texto sobre este conteúdo' : 'Clique aqui e revise o vídeo sobre este conteúdo'}
                                                </Link>
                                            </Flex>
                                        ))
                                    ))}
                                </>
                            )) : <Center my={20}><CircularProgress isIndeterminate color='#004ba0' size={20} /></Center>}
                            <Text pt={5} textAlign={'justify'}>{Texts.PARTIAL_SUCCESS_FEEDBACK_CONTENT2}</Text>
                            {
                                (attempt < 4 && wrongQuestion.length > 0) ?
                                    <Flex my={10} justifyContent={'flex-end'}>
                                        <Button
                                            onClick={goBackToQuestions}
                                            bg={'#004ba0'}
                                            color={'#fff'}
                                            leftIcon={<GoArrowLeft size={20} />}
                                        >
                                            Refazer questionário
                                        </Button>
                                    </Flex>
                                    :
                                    <Flex my={10} justifyContent={'flex-end'}>
                                        <Button
                                            onClick={endQuestions}
                                            bg={'#004ba0'}
                                            color={'#fff'}
                                        >
                                            Finalizar questionário
                                        </Button>
                                    </Flex>
                            }
                        </Box>
                    </>
            }
        </Box>
    </Box>
}

export default Feedback;