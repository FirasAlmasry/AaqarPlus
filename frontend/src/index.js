import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./util/theme";
import { SnackbarProvider } from "notistack";
import './locales/i18n';
import './index.css';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
// redux
import { store, persistor } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <SnackbarProvider
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >
              <App />
            </SnackbarProvider>
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
);
