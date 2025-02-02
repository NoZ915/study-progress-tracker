import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme, MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import App from './App.jsx'
import MaterialsPage from '../pages/MaterialsPage.jsx';
import SessionsPage from '../pages/SessionsPage.jsx';
import LonginPage from '../pages/LoginPage.jsx';
import { AuthProvider } from '../contexts/AuthProvider.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AuthRedirect from '../pages/AuthRedirect.jsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MaterialsPage />,
        index: true
      },
      {
        path: "/sessions/:materialId",
        element: <SessionsPage />
      },
      {
        path: "/login",
        element: <LonginPage />
      },
      {
        path: "/auth",
        element: <AuthRedirect />
      }
    ]
  }
])

const theme = createTheme({
  /** Put your mantine theme override here */
});

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <MantineProvider theme={theme}>
      <StrictMode>
        <GoogleOAuthProvider clientId={clientId}>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </GoogleOAuthProvider>
      </StrictMode>
    </MantineProvider>
  </QueryClientProvider>
)
