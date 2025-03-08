import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Login from './pages/login.jsx'
import ProductDashboard from './pages/dashboard.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<HomePage/>
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/dashboard',
    element:<ProductDashboard></ProductDashboard>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
      

    
   
  </StrictMode>,
)
