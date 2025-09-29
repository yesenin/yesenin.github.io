import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createHashRouter, RouterProvider } from 'react-router';
import CalendarPage from './pages/CalendarPage.tsx';
import HyPage from './pages/HyPage.tsx';
import MainContainer from './components/MainContainer.tsx';
import HyCards from './components/hy/games/HyCards.tsx';
import HyWords from './components/hy/HyWords.tsx';
import HyTyping from './components/hy/games/HyTyping.tsx';
import HyWord from './components/hy/HyWord.tsx';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
  {
      element: <MainContainer />,
      children: [
        {
          path: 'calendar',
          element: <CalendarPage />
        },
        {
          path: 'hy',
          element: <HyPage />,
          children: [
            {
              path: '',
              element: <HyWords />
            },
            {
              path: 'words/:id',
              element: <HyWord />
            },
            {
              path: 'words',
              element: <HyWords />
            },
            {
              path: 'games/cards',
              element: <HyCards />
            },
            {
              path: 'games/typing',
              element: <HyTyping />
            }
          ]
        }
      ]
    }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
