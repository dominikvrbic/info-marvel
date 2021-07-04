import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AxiosProvider } from './utils';
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <AxiosProvider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </ChakraProvider>
      </QueryClientProvider>
    </AxiosProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
