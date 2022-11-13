import { styled } from '@mui/material/styles';

export const StyledUnauthorized = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  height: 100vh;
  margin: 0 32px;

  .vbee-studio-logo {
    margin-top: 48px;
    margin-bottom: 16px;
  }

  .center {
    text-align: center;
  }

  .unauthorized-title {
    font-size: 24px;
    font-weight: bold;
  }

  .unauthorized-img {
    height: 50vh;
    margin-bottom: 48px;
  }

  .logo {
    width: 144px;
    height: 40px;
  }
`;
