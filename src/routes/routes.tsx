import { Feedback, Questions } from "../components";


type Route = {
    path: string;
    element: JSX.Element;
}

export const routes: Route[] = [
    {
        path: 'questions',
        element: <Questions />
    },
    {
        path: 'feedback',
        element: <Feedback />
    }
]