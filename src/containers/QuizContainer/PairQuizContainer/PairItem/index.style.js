import { styled } from '@mui/material/styles';

const connectPointOffset = {
    left: { left: 0, top: "50%", transform: "translate(-50%, -50%)" },
    right: { left: "100%", top: "50%", transform: "translate(-50%, -50%)" },
    top: { left: "50%", top: 0, transform: "translate(-50%, -50%)" },
    bottom: { left: "50%", top: "100%", transform: "translate(-50%, -50%)" }
};

export const ConnectPointBox = styled('div')`
    position: absolute;
    width: 25;
    height: 25;
    border-radius: 50%;
    opacity: 0.2;

    &:hover {
        opacity: 0.6;
    }

`;

// ${{ ...connectPointOffset[(props) => props.handler] }}