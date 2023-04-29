import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Quizgame from './components/Quizgame.jsx'


const router= createBrowserRouter([
    {
        path:'/',
        element:<App/>
    },

    {
        path:'/quizgame',
        element:<Quizgame/>
    }

])
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>);
