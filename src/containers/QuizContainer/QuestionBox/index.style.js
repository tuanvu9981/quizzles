import { styled } from '@mui/material/styles';
import { FLOATING_BOX_COLOR } from 'src/theme/color';

export const QuestionPart = styled('div')`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
    width: 85%;
    gap: 20px;

    .question-audio-text {
        flex: 8;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        height: 130px;
        gap: 10px;
    }

    .illustration-box {
        flex: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        background-color: ${FLOATING_BOX_COLOR};
        border: 2.5px solid #0D4DC9;
        width: 130px;
        height: 130px;

        img {
            border-radius: 10px;
            width: 110px;
            height: 100px;
        }
    }
`