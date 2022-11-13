import {styled} from '@mui/material/styles';
import { BUTTON_COLOR } from 'src/theme/color';

export const StyledAudio = styled('div')`
    margin: 0 10px;
    .controls {
        width: ${props => props.size};
        height: ${props => props.size};
        border: 2px solid ${BUTTON_COLOR};
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${props => props.size};
        color: ${BUTTON_COLOR};
        cursor: pointer;
        &:hover {
            background-color: #ccc;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }
    }

`