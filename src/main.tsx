import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createHashRouter, RouterProvider } from 'react-router';
import CalendarFeature from './features/calendar/CalendarFeature.tsx';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'calendar',
    element: <CalendarFeature />
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
