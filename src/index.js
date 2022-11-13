// basic libs
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Redux and persistor 
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store';

// UI, multiple languages, routes
import { AppRouter } from './router';
// import './index.scss';
import 'animate.css';
import learning_theme from './theme/learning-theme';
import { ThemeProvider, Box } from '@mui/material';
import { CssBaseline } from '@mui/material';
// import { BaseToastContainer } from './common/toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={learning_theme}>
      <CssBaseline />
      <Provider store={store()}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <AppRouter />
        {/* </PersistGate> */}
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
