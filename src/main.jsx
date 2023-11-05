import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import Home from './Pages/Home/Home';
import About from './Components/About/About';
import Login from './Pages/signPage/Login';
import SignUp from './Pages/signPage/SignUp';
import AuthProviders from './Providers/AuthProviders';
import CheckOut from './Pages/CheckOut/CheckOut';
import Bookings from './Pages/Bookings/Bookings';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/checkout/:id",
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: "/bookings",
        element: <PrivateRoute><Bookings></Bookings></PrivateRoute>

      }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-6xl mx-auto'>
    <React.StrictMode>
      <AuthProviders>

        <RouterProvider router={router} />
      </AuthProviders>
    </React.StrictMode>,
  </div>
)
