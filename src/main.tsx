import React from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QuestionProvider } from './components/Context/QuestionContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <QuestionProvider>
        <App />
      </QuestionProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
