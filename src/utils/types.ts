export type Questions = {
    questions: Question[];
}

export type Question = {
    questionId: number;
    question: string;
    options: Option[];
    position?: number;
}

export type Option = {
    text: string;
    isCorrect: boolean;
}

export type FeedbackResume = {
    feedbacks: Feedback[];
}

export type Feedback = {
    questionId: number;
    suggestions: Suggestion[];
}

export type Suggestion = {
    content: any;
    type: string;
}

export type FeedbackRequest = {
    questionIds: number[];
}