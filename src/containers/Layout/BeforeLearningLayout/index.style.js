import { styled } from '@mui/material/styles';
import { DRAWER_WIDTH } from 'src/theme/size';

export const Main = styled('div', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: `-${DRAWER_WIDTH}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
      }),
    }),
  );