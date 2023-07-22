import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, Global, type Theme, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

import { ResumeProvider } from './Resume/Context/Resume.tsx';
import App from './App.tsx';

const theme: Theme = {
  color: {
    primary: 'black',
    secondary: 'teal',
  },
  typography: {
    base: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      lineHeight: 1.4,
    },
    h1: {
      fontSize: 32,
      fontWeight: 'bold',
    },
    h2: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    h3: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    h4: {
      fontSize: 13,
      fontWeight: 'bold',
    },
    body: {
      fontSize: 14,
      textAlign: 'justify',
    },
  },
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global
      styles={css`
        ${emotionNormalize}
      `}
    />
    <ThemeProvider theme={theme}>
      <ResumeProvider>
        <App />
      </ResumeProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
