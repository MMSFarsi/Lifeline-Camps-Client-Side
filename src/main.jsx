import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import { router } from './Routes/router';
import AuthProvider from './provider/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

const queryClient= new  QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider> 
  <Toaster position='top-center' reverseOrder={false} />
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
      </QueryClientProvider>  
     
  </AuthProvider>
  </StrictMode>,
)
