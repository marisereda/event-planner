import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App.tsx';
import { CreateEventPage } from './pages/CreateEventPage.tsx';
import { EditEventPage } from './pages/EditEventPage.tsx';
import { EventPage } from './pages/EventPage.tsx';
import { HomePage } from './pages/HomePage.tsx';

import { store } from './redux/eventsStore.ts';
import './tailwind.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'create',
        element: <CreateEventPage />,
      },
      {
        path: 'edit/:id',
        element: <EditEventPage />,
      },
      {
        path: 'events/:id',
        element: <EventPage />,
      },
    ],
  },

  {
    path: '*',
    element: <HomePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
