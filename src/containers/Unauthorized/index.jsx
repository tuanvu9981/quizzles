import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Button, Typography } from '@mui/material';
import { useKeycloak } from '@react-keycloak/web';
import unauthorizedImg from '@src/assets/images/unauthorized.png';
import logo from '@src/assets/logo/smartdialog.png';
import { ROLES } from '@src/constants';
import { IAM_CLIENT_ID } from '@src/configs';
import { StyledUnauthorized } from './index.style';

const Unauthorized = () => {
  const { t } = useTranslation();
  const { keycloak } = useKeycloak();
  const history = useHistory();

  const handleBackToPreviousPage = () => history.goBack();
  const handleLogout = () => keycloak.logout();

  const renderButton = () => {
    if (!keycloak.authenticated) {
      return <div />;
    }

    if (keycloak.hasResourceRole(ROLES.VIEW_BACK_OFFICE, IAM_CLIENT_ID))
      return (
        <Button onClick={handleBackToPreviousPage} variant="contained">
          {t('goHome')}
        </Button>
      );

    return (
      <Button onClick={handleLogout} variant="contained">
        {t('logout')}
      </Button>
    );
  };

  return (
    <StyledUnauthorized>
      {!keycloak?.hasResourceRole(ROLES.VIEW_BACK_OFFICE, IAM_CLIENT_ID) && (
        <Box className="vbee-studio-logo">
          <img src={logo} alt="vbee-logo" className="logo" />
        </Box>
      )}
      <Typography className="unauthorized-title center">
        {t('unauthorizedTitle')}
      </Typography>
      <Typography className="center">{t('unauthorizedDescription')}</Typography>
      {renderButton()}
      <img
        src={unauthorizedImg}
        alt="unauthorized"
        className="unauthorized-img"
      />
    </StyledUnauthorized>
  );
};

export default Unauthorized;
