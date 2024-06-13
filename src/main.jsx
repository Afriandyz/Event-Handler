import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' 
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginForm from './Pages/LoginForm.jsx'
import RegisterForm from './Pages/RegisterForm.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path:"/login",
    element: <LoginForm />
  },
  {
    path:"/register",
    element: <RegisterForm />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
