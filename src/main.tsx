import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import './index.css'
import Main from './routers/Main';
import { store } from './store';
import ListMovies from './components/containers/ListMovies';
import ListCharacters from './components/containers/ListCharacters';
import DetailCharacter from './components/DetailCharacter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <ListMovies />,
      },
      {
        path: "characters/:mal_id",
        element: <ListCharacters />,
      },
      {
        path: "characters/:character_mal_id/full",
        element: <DetailCharacter />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
