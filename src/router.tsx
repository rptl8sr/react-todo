import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import { NotFound } from './pages/NotFound';
import { ViewListPage } from './pages/ViewListPage';
import { ViewListItem } from './pages/ViewListItem';
import { ToDoListPage } from './pages/ToDoListPage';
import React from 'react';


export const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout/>,
    errorElement: <NotFound/>,
    children: [
      {
        path: '/',
        element: <ToDoListPage/>,
      },
      {
        path: '/list',
        element:<ViewListPage/>,
      },
      {
        path: '/list/:id',
        element: <ViewListItem />,
      }
    ],
  },
  {
    path: '*',
    element: <NotFound/>,
  },
// ]);
], {basename: '/app'})