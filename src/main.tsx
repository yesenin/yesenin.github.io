import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createHashRouter, RouterProvider } from 'react-router';
import CalendarPage from './pages/CalendarPage.tsx';
import HyPage from './pages/HyPage.tsx';
import MainContainer from './components/MainContainer.tsx';
import HyWords from './components/hy/HyWords.tsx';
import HyTyping from './components/hy/games/HyTyping.tsx';
import HyWord from './components/hy/HyWord.tsx';
import FrPage from './pages/FrPage.tsx';
import EnPage from './pages/EnPage.tsx';
import SvPage from './pages/SvPage.tsx';
import ZhPage from './pages/ZhPage.tsx';
import HyAddWord from './components/hy/HyAddWord.tsx';
import HySelectWords from './components/hy/games/HySelectWords.tsx';
import HyGames from './components/hy/games/HyGames.tsx';
import HyVerbGame from './components/hy/games/HyVerbGame.tsx';
import HyPhrases from './components/hy/HyPhrases.tsx';
import HyRandomWord from './components/hy/HyRandomWord.tsx';

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
              path: 'words',
              children: [
                {
                  path: '',
                  element: <HyWords />
                },
                {
                  path: ':id',
                  element: <HyWord />
                },
                {
                  path: 'add',
                  element: <HyAddWord />
                },
                {
                  path: 'random',
                  element: <HyRandomWord />
                }
              ]
            },
            {
              path: 'phrases',
              element: <HyPhrases />
            },
            {
              path: 'games',
              children: [
                {
                  path: '',
                  element: <HyGames />
                },
                {
                  path: 'typing',
                  element: <HyTyping />
                },
                {
                  path: 'select',
                  element: <HySelectWords />
                },
                {
                  path: 'verb',
                  element: <HyVerbGame />
                }
              ]
            }
          ]
        },
        {
          path: 'zh',
          element: <ZhPage />
        },
        {
          path: 'en',
          element: <EnPage />
        },
        {
          path: 'sv',
          element: <SvPage />
        },
        {
          path: 'fr',
          element: <FrPage />
        }
      ]
    }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
