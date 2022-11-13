import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { DRAWER_WIDTH } from 'src/theme/size';

export const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFC000',
    // width: '100%',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        // width: `calc(100% - ${DRAWER_WIDTH}px)`,
        // marginRight: `${DRAWER_WIDTH}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export const IconContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '2%',
    width: '6.5%',
    marginRight: '2%',
})