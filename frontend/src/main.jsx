import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme, MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import App from './App.jsx'
import MaterialsPage from '../pages/MaterialsPage.jsx';

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
      }
    ]
  }
])

const theme = createTheme({
  /** Put your mantine theme override here */
});

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <MantineProvider theme={theme}>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </MantineProvider>
  </QueryClientProvider>
)
