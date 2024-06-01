import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import OrderPage from "../Pages/OrderPage/OrderPage";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : "/",
            element: <OrderPage></OrderPage>
        },
        {
            path : "/login",
            element: <Login></Login>
        },
        
        
      ]
    },
  ]);