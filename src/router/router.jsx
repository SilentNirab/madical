import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import DocProfile from "../Pages/DocProfile/DocProfile";
import Appointment from "../Pages/Appointment/Appointment";
import Dashboard from "../layout/Dashboard/Dashboard";
import Appointments from "../Pages/Dashboard/Appointments/Appointments";
import PrivateRoute from "./PrivetRoute";

  
export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
        path: "/",
        element: <Home></Home>  
        },
        {
          path: '/doctor/:id',
          element: <DocProfile></DocProfile>,
          loader:({params}) => fetch(`http://localhost:5000/doctors/${params.id}`)
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/appointment',
          element: <Appointment></Appointment>
        }
       
      ]
    },
    {
      path: "/dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: "/dashboard/appointments",
          element: <PrivateRoute><Appointments></Appointments></PrivateRoute>
        }
      ]
    }
  ]);