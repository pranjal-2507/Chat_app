import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'; 
import { extendTheme } from '@chakra-ui/react'; 
import App from './App';

const theme = extendTheme({
  colors: {
    primary: {
      500: '#3182CE',
    },
  },
});

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
