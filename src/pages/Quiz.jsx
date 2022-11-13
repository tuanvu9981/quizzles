import React, { useEffect, useState } from "react";
import { quizList } from "./Quiz.data";
import BeforeLearningLayout from "src/containers/Layout/BeforeLearningLayout";
import { Container } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import MCQuizContainer from "src/containers/QuizContainer/MCQuizContainer";
import VSSwiper from "src/components/VSSwiper";
import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import { FLOATING_BOX_COLOR } from "src/theme/color";
import { useDispatch, useSelector } from "react-redux";
import { setAllQuizzes } from "../redux/quiz/actions";

export const QuizBox = styled(Grid)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${FLOATING_BOX_COLOR};
    border: 2.5px solid #0D4DC9;
    border-radius: 10px;
    height: 500px;
    padding: 25px 30px;
`

const Quiz = () => {
    const [quizzes, setQuizzes] = useState(quizList);
    const dispatcher = useDispatch();
    const disableNext = useSelector(state => state.quiz.disableNext);

    useEffect(() => {
        const answers = quizzes.map((ele) => {
            const result = ele.quizParts.reduce((arr, e, i) =>
                ((e.mcQuizParts.correctness === true) && arr.push(i), arr), []
            )
            if (result.length === 1) {
                return { id: ele.id, oneAnswerTrueIndex: result[0]};
            } else {
                return { id: ele.id, multipleAnswersTrueIndexes: result};
            }
        });

        dispatcher(setAllQuizzes(answers));
    }, []);

    const data = quizzes.map((ele) => {
        const rgbaOpacity = `rgba(225,225,225,${ele.backgroundOpacity})`;
        return (
            <SwiperSlide key={ele.id}>
                <QuizBox container style={{
                    backgroundImage: `linear-gradient(${rgbaOpacity}, ${rgbaOpacity}), url(${ele.backgroundUrl})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                }}>
                    <Grid item>
                        <MCQuizContainer data={ele} />
                    </Grid>
                </QuizBox>
            </SwiperSlide >
        )
    });

    return (
        <BeforeLearningLayout>
            <Container sx={{
                maxWidth: '80%',
                mt: '75px',
                display: 'flex',
                flexDirection: 'row',
            }}
                maxWidth={false}
            >
                <VSSwiper data={data} disableNext={disableNext} learnType="quiz" />
            </Container>
        </BeforeLearningLayout>
    )
}

export default Quiz;