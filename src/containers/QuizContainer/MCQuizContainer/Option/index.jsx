// React
import { useState } from 'react';

// MUI base
import { Checkbox, Radio, Typography, FormControlLabel } from '@mui/material';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setAbleToPassById, setDisableNext } from '../../../../redux/quiz/actions';
import { useEffect } from 'react';


const Option = ({ props }) => {
    const dispatcher = useDispatch();
    const currentQuiz = useSelector(state => state.quiz.currentQuiz);
    const ableNextNum = useSelector(state => state.quiz.ableNextNum);

    const [chosen, setChosen] = useState("unchosen");
    const { selectedNum, setSelectedNum } = props;
    const { chosenIndex, setChosenIndex } = props;

    // PROBLEM HERE
    const { answers, setAnswers } = props;
    const { indexList, setIndexList } = props;

    // useEffect(() => {
    //     console.log(answers);
    // }, [answers]);

    const handleChangeOption = async (e) => {
        const value = parseInt(e.target.value);
        if (props.mcType === "one") {
            setChosenIndex(props.index);
            if (value === currentQuiz.oneAnswerTrueIndex) {
                if (chosen === "unchosen") {
                    dispatcher(setAbleToPassById(ableNextNum + 1));
                }
                setChosen("correct");
                dispatcher(setDisableNext(false));
            } else {
                setChosen("incorrect");
                dispatcher(setDisableNext(true));
            }
        }
        if (props.mcType === "multiple" && e.target.checked === true) {
            if (currentQuiz.multipleAnswersTrueIndexes.includes(value)) {
                setSelectedNum(selectedNum + 1);
                setChosen("correct");

                // setAnswers(prevState => {
                //     return {
                //         ...prevState,
                //         state: "correct",
                //         selectedNum: prevState.selectedNum + 1
                //     }
                // });
                // console.log(answers);

                // setIndexList(prev => {
                //     return [
                //         ...prev,
                //         value
                //     ]
                // });
                // console.log(indexList);

                setAnswers({
                    ...answers,
                    state: "correct",
                    selectedNum: answers.selectedNum + 1
                });
                console.log(indexList);

                if (selectedNum === currentQuiz.multipleAnswersTrueIndexes.length) {
                    dispatcher(setDisableNext(false));
                    dispatcher(setAbleToPassById(ableNextNum + 1));
                } else dispatcher(setDisableNext(true));
            } else {
                setChosen("incorrect");
                dispatcher(setDisableNext(true));
            }
        }
    }

    return (
        <FormControlLabel
            value={props.index}
            control={props.mcType === "one" ? <Radio /> : <Checkbox checked={chosen !== "unchosen"} />}
            label={
                props.content.text !== undefined ?
                    <Typography variant='h2'>{props.content.text}</Typography>
                    :
                    props.content.imageUrl !== undefined ?
                        <img
                            src={props.content.imageUrl}
                            alt={`option ${props.index}`}
                            style={{ width: '90px', height: '75px' }}
                        />
                        :
                        props.content.videoUrl !== undefined ?
                            <video controls style={{ width: '150px', height: '85px' }} controlsList="nodownload">
                                <source src={props.content.videoUrl} />
                            </video>
                            :
                            <audio controls style={{ width: '200px', height: '40px' }} controlsList="nodownload">
                                <source src={props.content.audioUrl} />
                            </audio>
            }
            sx={{
                width: '290px',
                padding: '12px',
                margin: '10px',
                borderRadius: '10px',
                boxSizing: 'border-box',
                border: (chosen === "unchosen" || (props.mcType === "one" && chosenIndex !== props.index)) ? '2px solid #0D4DC9'
                    : chosen === "correct" ? '4px solid green' : '4px solid red',
            }}
            onChange={handleChangeOption}
        />
    );
}

export default Option;