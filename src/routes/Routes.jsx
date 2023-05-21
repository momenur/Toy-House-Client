import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Alltoy from "../pages/AllToy/Alltoy";
import Blog from "../pages/Blog/Blog";
import MyToy from "../pages/MyToy/MyToy";
import AddToy from "../pages/AddToy/AddToy";
import Page404 from "../pages/Page404/Page404";
import Login from "../pages/LogIn/Login";
import Register from "../pages/LogIn/Register";
import Details from "../pages/MyToy/Details";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'allToy',
          element: <Alltoy></Alltoy>
        },
        {
          path: 'myToy',
          element: <MyToy></MyToy>
        },
        {
          path: 'addToy',
          element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
          path: 'logIn',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
          path: 'allToy/:id',
          element: <PrivateRoute><Details></Details></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/allToy/${params.id}`)
        }
      ]
    },
    {
      path: '*',
      element: <Page404></Page404>
    }
  ]);

  export default router;