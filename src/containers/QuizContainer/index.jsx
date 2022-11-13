import { useEffect, useState } from "react";
import { QUIZ_TYPE } from "@src/constants/quiz";
import MCQuizContainer from "./MCQuizContainer";
import PairQuizContainer from "./PairQuizContainer";
import { getQuizById } from "@src/apis/quiz";

const QuizContainer = (props) => {

    const [quiz, setQuiz] = useState();

    useEffect(() => {
        const currentQuiz = fetchQuiz(props.id);
        setQuiz(currentQuiz);
    }, []);

    const fetchQuiz = async (id) => {
        const data = await getQuizById(id);
        return data.result;
    }

    switch (quiz.type) {
        case QUIZ_TYPE.MC_QUIZ:
            return (<MCQuizContainer data={quiz} />);

        case QUIZ_TYPE.PAIR_QUIZ:
            return (<PairQuizContainer data={quiz} />);

        default:
            return (<></>);
    }
}