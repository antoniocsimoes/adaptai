import { createContext, useState } from 'react';
import { Questions } from '../../utils';

type PropsQuestionContext = {
    questions: Questions;
    setQuestions: (questions: Questions) => void;
    wrongQuestion: number[];
    setWrongQuestion: (wrongQuestion: number[]) => void;
    attempt: number;
    setAttempt: (attempt: number) => void;
    formatQuestions: (data: Questions) => void;
}

export const DEFAULT_VALUE: PropsQuestionContext = {
    formatQuestions: () => {},
    questions: {
        questions: []
    },
    setQuestions: () => ({
        questions: []
    }),
    wrongQuestion: [],
    setWrongQuestion: () => { },
    attempt: 1,
    setAttempt: () => { }
}
export const QuestionContext = createContext<PropsQuestionContext>(DEFAULT_VALUE)

export const QuestionProvider = ({ children }: { children: JSX.Element }) => {
    const [questions, setQuestions] = useState(DEFAULT_VALUE.questions)
    const [wrongQuestion, setWrongQuestion] = useState(DEFAULT_VALUE.wrongQuestion);
    const [attempt, setAttempt] = useState(DEFAULT_VALUE.attempt)

    const formatQuestions = (data: Questions) => {
        const newQuestions = data?.questions.map((question, index) => ({
            questionId: question.questionId,
            question: question.question,
            options: question.options,
            position: index
        }));
        setQuestions({ questions: newQuestions})
    }

    return <QuestionContext.Provider
        value=
        {
            {
                wrongQuestion,
                setWrongQuestion,
                attempt,
                setAttempt,
                questions,
                setQuestions,
                formatQuestions
            }
        }
    >
        {children}
    </QuestionContext.Provider>
}