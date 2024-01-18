import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import DocProfile from "../Pages/DocProfile/DocProfile";
  
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
          path: "/docprofile",
          element: <DocProfile></DocProfile>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
       
      ]
    },
  ]);