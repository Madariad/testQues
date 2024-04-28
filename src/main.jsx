import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import QuestionsRandomPage from '@/page/questionsRandomPage'
import QuestionsRandomFiveTine from '@/page/questionsRandomFiveTine'
import QuestionsNo from '@/page/questionsNo'

import MainPage from '@/page/mainPage'
import TestListPage from '@/page/testListPage';
import TestPos from '@/page/testPos';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Link,
  useNavigate
} from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/testQues",
      element: <App />,
      children: [
        {
          index: true,
          element: <MainPage/>,
        },
        {
          path: "/test",
          element: <TestListPage/>
        },
        ],
      },
      {
        path: '/questionsRandom',
        element: <QuestionsRandomPage />
      },
      {
        path: '/questionsRandomFiveTine',
        element: <QuestionsRandomFiveTine />
      },
      {
        path: '/questionsStatistics',
        element: <div className="">questionsStatistics</div>
      },
      {
        path: '/questionsNo',
        element: <QuestionsNo />
      },
      {
        path: '/testpos',
        element: <TestPos />
      }

  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}  />
  </React.StrictMode>,
)
