import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Blogs from "../components/Blogs/Blogs";
import Home from "../components/Home/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import AddToys from "../pages/AddToys/AddToys";
import MyToys from "../pages/MyToys/MyToys";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ToyCardDetails from "../pages/AllToys/ToyCardDetails";
import UpdateToy from "../pages/AllToys/UpdateToy";
import PrivateRoute from "./PrivateRoute";
import CategoryDetails from "../components/ShopByCategory/CategoryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addToys",
        element: <AddToys></AddToys>,
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () =>
          fetch("https://toy-marketplace-server-mu.vercel.app/toys"),
      },
      {
        path: "/toyCardDetails/:id",
        element: (
          <PrivateRoute>
            <ToyCardDetails></ToyCardDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-marketplace-server-mu.vercel.app/toys/${params.id}`
          ),
      },
      {
        path: "/updateToy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(
            `https://toy-marketplace-server-mu.vercel.app/toys/${params.id}`
          ),
      },
      {
        path: "/categoryDetails/:id",
        element: 
          <PrivateRoute>
            <CategoryDetails></CategoryDetails>
          </PrivateRoute>,        
        loader: ({ params }) =>
          fetch(
            `https://toy-marketplace-server-mu.vercel.app/toys/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
