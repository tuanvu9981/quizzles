// base React 
import React, { useRef } from 'react';

// MUI components
import { IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// import Swiper core and required modules
import { Navigation } from 'swiper';
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentQuizByIndex, setDisableNext } from '../../redux/quiz/actions';

const ARROW_COLOR = '#0D4DC9';
const DISABLE_COLOR = '#A9A9A9';

const VSSwiper = ({ data, disableNext, space = 0, slideNum = 1, learnType }) => {
    const swiperRef = useRef(null);
    const dispatcher = useDispatch();
    const ableNextNum = useSelector(state => state.quiz.ableNextNum);

    const onClickPrev = () => {
        swiperRef.current.swiper.slidePrev();
        if (learnType === "quiz") {
            dispatcher(setDisableNext(false));
            dispatcher(setCurrentQuizByIndex(swiperRef.current.swiper.activeIndex));
        }
    }

    const onClickNext = () => {
        swiperRef.current.swiper.slideNext();
        if (learnType === "quiz") {
            const currentIndex = swiperRef.current.swiper.activeIndex;
            if (ableNextNum > currentIndex) dispatcher(setDisableNext(false));
            else dispatcher(setDisableNext(true));
            dispatcher(setCurrentQuizByIndex(currentIndex));
        }
    }

    useEffect(() => {
        if (learnType === "quiz") {
            dispatcher(setCurrentQuizByIndex(0));
        }
    }, []);

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <IconButton onClick={onClickPrev}>
                    <ArrowBackIosIcon sx={{ fontSize: '40px', color: ARROW_COLOR }} />
                </IconButton>
            </div>
            <Swiper
                modules={[Navigation]}
                spaceBetween={space}
                slidesPerView={slideNum}
                ref={swiperRef}
                allowTouchMove={false}
                breakpoints={{

                }}
            >
                {data}
            </Swiper>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                    disabled={disableNext === undefined ? false : disableNext}
                    onClick={onClickNext}
                >
                    <ArrowForwardIosIcon sx={{
                        fontSize: '40px',
                        color: disableNext === true ? DISABLE_COLOR : ARROW_COLOR
                    }} />
                </IconButton>
            </div>
        </>
    )
}

export default VSSwiper;