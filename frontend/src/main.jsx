// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createTheme, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

import App from './App.jsx'
import AuthProvider from '../contexts/AuthProvider.jsx';
import ProtectedRoute from '../components/ProtectedRoute.jsx';
import MaterialsPage from '../pages/MaterialsPage.jsx';
import SessionsPage from '../pages/SessionsPage.jsx';
import EditProfilePage from '../pages/EditProfilePage.jsx';
import OAuthCallbackPage from '../pages/OAuthCallbackPage.jsx';
import ProgressPage from '../pages/ProgressPage.jsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MaterialsPage />, index: true },
      { path: "/auth/google/callback", element: <OAuthCallbackPage /> },
      { path: "/materials/:material_id", element: <MaterialsPage /> },

      // 受保護的route（未登入無法瀏覽）
      {
        element: <ProtectedRoute />,
        children: [
          { path: "/progress/material/:material_id", element: <SessionsPage /> },
          { path: "/edit-profile", element: <EditProfilePage /> },
          { path: "/progress", element: <ProgressPage /> },
        ],
      },
    ],
  }
])

const theme = createTheme({
  /** Put your mantine theme override here */
});

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <MantineProvider theme={theme}>
      {/* <StrictMode> */}
      <GoogleOAuthProvider clientId={clientId}>
        <AuthProvider>
          <Notifications />
          <RouterProvider router={router} />
        </AuthProvider>
      </GoogleOAuthProvider>
      {/* </StrictMode> */}
    </MantineProvider>
  </QueryClientProvider>
)
