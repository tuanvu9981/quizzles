import React, { useEffect, useState } from "react";
import { quizList } from "./Quiz.data";
import { pairs } from "./Quiz.data";
import BeforeLearningLayout from "src/containers/Layout/BeforeLearningLayout";
import { Container } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import VSSwiper from "src/components/VSSwiper";
import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import { FLOATING_BOX_COLOR } from "src/theme/color";
import { useDispatch, useSelector } from "react-redux";
import { setAllQuizzes } from "../redux/quiz/actions";
import { pairQuizList } from "../containers/QuizContainer/PairQuizContainer/mock.data"
import PairQuizContainer from "src/containers/QuizContainer/PairQuizContainer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: false,
    vertical: false,
};

const Quiz = () => {
    const [quizzes, setQuizzes] = useState(pairs);

    return (
        <BeforeLearningLayout>
            <Container maxWidth="md">
                <PairQuizContainer data={quizzes[0]} />
            </Container>
        </BeforeLearningLayout>
    )
}

export default Quiz;