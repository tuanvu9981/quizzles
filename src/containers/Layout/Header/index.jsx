import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material'

import { IconContainer } from './index.style';
import VietStudy from './../../../assets/logo/viet_study_logo.png'
import { AppBar } from './index.style';

const Header = () => {

    const changeMenuOpen = (currentOpen) => {
        
    }

    return (
        <AppBar >
            <img style={{ width: '10%', height: '10%' }} src={VietStudy} />

            <IconContainer>
                <IconButton style={{ color: 'black' }}>
                    <NotificationsIcon fontSize="large" />
                </IconButton>
                <IconButton style={{ color: 'black' }} >
                    <MenuIcon fontSize="large" />
                </IconButton>
            </IconContainer>
        </AppBar>
    )
}
export default Header;