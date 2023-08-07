import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App.tsx';
import { CreateEventPage } from './pages/CreateEventPage.tsx';
import { EditEventPage } from './pages/EditEventPage.tsx';
import { EventPage } from './pages/EventPage.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { NotFoundPage } from './pages/NotFoundPage.tsx';
import { StoryBook } from './pages/StoryBook.tsx';
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
    path: '/storybook',
    element: <StoryBook />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
