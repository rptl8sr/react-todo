import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import './index.scss';
import {ToDoListPage} from './pages/ToDoListPage';
import { HomePage } from './pages/HomePage';
import { ToDo } from './models';
import { NotFound } from './pages/NotFound';
import { ItemDescription } from './pages/ItemDesription';
import { Layout } from './layouts/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';


const todos: ToDo[] = [
  {
    id: 1,
    text: 'Задача 1',
    isDone: false,
  },
  {
    id: 2,
    text: 'Задача 2',
    isDone: true,
  },
  {
    id: 3,
    text: 'Задача 3',
    isDone: false,
  },
  {
    id: 4,
    text: 'Задача 4',
    isDone: true,
  }
];

const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <HomePage todos={todos}/>,
      },
      {
        path: '/list/:id',
        element: <ItemDescription todos={todos}/>,
      },
      {
        path: '/todo',
        element: <ToDoListPage />,

      }
    ]
  },
  {
    path: '*',
    element: <NotFound />,
  }
], {basename: '/app/'})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
    {/*<BrowserRouter>*/}
    {/*  <Header />*/}
    {/*  <Routes>*/}
    {/*    <Route path="/" element={<HomePage todos={todos}/>} />*/}
    {/*    <Route path="/list/:id" element={<ItemDescription todos={todos}/>} />*/}
    {/*    <Route path="/todo" element={<ToDoListPage />} />*/}
    {/*    <Route path="*" element={<NotFound/>} />*/}
    {/*  </Routes>*/}
    {/*</BrowserRouter>*/}
  </React.StrictMode>
);

