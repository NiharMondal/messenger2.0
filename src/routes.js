import { Navigate, useRoutes } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

export const Router = () => {
  useRoutes([
    {
      path: "/",
      children: [
        { path: "login", element: <Login/>},
        { path: "/", element: <Navigate to="/messenger/login" /> },
      ],
    },
    { path: "/messenger/register", element: <Register /> },
    { path: "*", element: <NotFound /> },
  ]);
};
