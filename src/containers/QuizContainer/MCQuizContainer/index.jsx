import { useEffect, useState } from "react";
import { FormGroup, Grid, RadioGroup, FormControl } from "@mui/material";
import Option from "./Option";
import QuestionBox from "../QuestionBox";
import voice1 from '../../../assets/mp3-test/voice1.mp3';

const MCQuizContainer = ({ data }) => {
    const [mcType, setMcType] = useState('multiple');
    const [chosenIndex, setChosenIndex] = useState(-1);
    const [selectedNum, setSelectedNum] = useState(1);

    // PROBLEM HERE
    const [answers, setAnswers] = useState({
        state: "unchosen",
        selectedNum: 1
    });
    const [indexList, setIndexList] = useState([]);

    const numberToRender = (len) => {
        let numRen = 0;
        if (len === 3) numRen = 4;
        else if (len % 2 === 0) numRen = 6;
        else numRen = 12;
        return numRen;
    }

    useEffect(() => {
        const arr = data.quizParts.filter(e => e.mcQuizParts.correctness === true);
        if (arr.length === 1) {
            setMcType('one');
        } else {
            setMcType('multiple');
        }
    }, []);

    // REAL: audioUrl={data.questionAudioUrl}
    return (
        <FormControl sx={{ display: 'flex', alignItems: 'center' }}>
            <QuestionBox
                imgUrl={data.questionImageUrl}
                audioUrl={voice1}
                question={data.question}
            />
            {mcType === "one" ?
                <RadioGroup
                    aria-labelledby="options"
                    name="buttons-group"
                >
                    <Grid container spacing={2}>
                        {data.quizParts.map((e, index) => {
                            return (
                                <Grid key={index} item md={numberToRender(data.quizParts.length)}
                                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <Option props={{ ...e, mcType, index, chosenIndex, setChosenIndex }} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </RadioGroup>
                :
                <FormGroup>
                    <Grid container spacing={2}>
                        {data.quizParts.map((e, index) => {
                            return (
                                <Grid key={index} item md={numberToRender(data.quizParts.length)}
                                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <Option key={index} props={{
                                        ...e, mcType, index, selectedNum, setSelectedNum,
                                        answers, setAnswers,
                                        indexList, setIndexList
                                    }} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </FormGroup>
            }
        </FormControl >
    );
}

export default MCQuizContainer;