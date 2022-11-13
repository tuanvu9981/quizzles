import { createTheme } from "@mui/material";
import { BACKGROUND_MAIN_COLOR } from "./color";
import BaoMoiWoff from '../fonts/Baomoi_gdi.woff';

function pxToRem(px) {
    // 1 rem = 16px
    return `${px / 16}rem`;
}

const learning_theme = createTheme({
    palette: {
        background: {
            default: BACKGROUND_MAIN_COLOR,
            paper: BACKGROUND_MAIN_COLOR
        },
    },
    typography: {
        fontFamily: 'BaoMoi',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                "@font-face": {
                    fontFamily: 'BaoMoi',
                    src: `url(${BaoMoiWoff})`
                }
            }
        }
    }
});

learning_theme.typography.h4 = {
    fontFamily: 'BaoMoi',
    fontSize: pxToRem(10),
    // '@media (min-width:600px)': {
    //     fontSize: pxToRem(15),
    // },
    [learning_theme.breakpoints.up('md')]: {
        fontSize: pxToRem(16),
    },
}

learning_theme.typography.h3 = {
    fontFamily: 'BaoMoi',
    fontSize: pxToRem(12),
    // '@media (min-width:600px)': {
    //     fontSize: pxToRem(15),
    // },
    [learning_theme.breakpoints.up('md')]: {
        fontSize: pxToRem(18),
    },
}

learning_theme.typography.h2 = {
    fontFamily: 'BaoMoi',
    fontSize: pxToRem(15),
    [learning_theme.breakpoints.up('md')]: {
        fontSize: pxToRem(23),
    },
};

learning_theme.typography.h1 = {
    fontFamily: 'BaoMoi',
    fontSize: pxToRem(18),
    [learning_theme.breakpoints.up('md')]: {
        fontSize: pxToRem(25),
    },
};

learning_theme.typography.h0 = {
    fontFamily: 'BaoMoi',
    fontSize: pxToRem(24),
    [learning_theme.breakpoints.up('md')]: {
        fontSize: pxToRem(36),
    },
};

learning_theme.typography.body1 = {
    fontFamily: 'BaoMoi',
    fontSize: pxToRem(13),
    [learning_theme.breakpoints.up('md')]: {
        fontSize: pxToRem(20),
    },
}

export default learning_theme;