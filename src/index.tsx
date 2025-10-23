import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import './index.scss';

import { HelmetProvider } from 'react-helmet-async';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </Provider>
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

