import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import QuestionsRandomPage from '@/page/questionsRandomPage'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  [
     {
        path: "testQues/",
        element: <App />,
      },
      {
        path: '/questionsRandom',
        element: <QuestionsRandomPage />
      },
      {
        path: '/questionsRandomFiveTine',
        element: <div className="">questionsRandomFiveTine</div>
      },
      {
        path: '/questionsStatistics',
        element: <div className="">questionsStatistics</div>
      },
      {
        path: '/questionsNo',
        element: <div className="">questionsNo</div>
      }

  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
