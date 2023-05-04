import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import About from "../../pages/About/About";
import Blogs from "../../pages/Blogs/Blogs";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home/Home";
import RecipeDetails from "../../pages/Home/Home/RecipeDetails/RecipeDetails";
import Login from "../../pages/Login/Login/Login";
import Register from "../../pages/Login/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            `https://chef-recipe-hunter-server-shejannizam.vercel.app/chef_data`
          ),
      },
      {
        path: "chef_data/:id",
        element: (
          <PrivateRoutes>
            <RecipeDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-hunter-server-shejannizam.vercel.app/chef_data/${params.id}`
          ),
      },
      {
        path: "blogs",
        element: (
          <PrivateRoutes>
            <Blogs />
          </PrivateRoutes>
        ),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
