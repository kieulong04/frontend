import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './scss/style.scss'
import './scss/detailProduct.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient} >
    <BrowserRouter >
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>
  </QueryClientProvider>
  
)
