import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";

import Layout from './Layout';
import Home from './Home';
import Login from './Login';


const container = document.getElementById('app');

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        // loader: homeLoader,
        Component: Home,
      },
      // {
      //   path: "todos",
      //   action: todosAction,
      //   loader: todosLoader,
      //   Component: TodosList,
      //   ErrorBoundary: TodosBoundary,
      //   children: [
      //     {
      //       path: ":id",
      //       loader: todoLoader,
      //       Component: Todo,
      //     },
      //   ],
      // },
      {
        path: "login",
        // loader: deferredLoader,
        Component: Login,
      },
    ],
  },
]);

createRoot(container)
  .render(
    <RouterProvider router={router} />
  );