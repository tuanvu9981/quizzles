import { QuestionPart } from "./index.style";
import AudioButton from "src/components/AudioButton";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const QuestionBox = (props) => {

    const { t } = useTranslation();
    return (
        <QuestionPart>
            <Box className="question-audio-text" sx={{
                border: props.imgUrl === undefined ? '' : '2px solid #0D4DC9',
            }}>
                <AudioButton size={'30px'} audioUrl={props.audioUrl} />
                <Typography variant="h1" textAlign="center">{props.question}</Typography>
            </Box>
            {props.imgUrl === undefined ? <></> :
                <Box className="illustration-box">
                    <img src={props.imgUrl} />
                    <Typography variant="h4" textAlign="center">{t('illustration')}</Typography>
                </Box>
            }
        </QuestionPart>
    )
}

export default QuestionBox;