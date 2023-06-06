import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import './index.css'
import Main from './routers/Main';
import { store } from './store';
import ListMovies from './components/containers/ListMovies';
import ListCharacters from './components/containers/ListCharacters';

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
