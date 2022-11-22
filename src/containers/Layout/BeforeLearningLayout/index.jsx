// MUI
import { Box } from '@mui/material';

// written component
import Header from '../Header';
import { Main } from './index.style';

const BeforeLearningLayout = ({ children }) => {
    return (
        <Box>
            <Header />
            <Main>
                {children}
            </Main>
        </Box>
    );
}

export default BeforeLearningLayout;