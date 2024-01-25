import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import GenrePage from "./pages/GenrePage/GenrePage.jsx";
import MoviesPage from "./pages/MoviesPage/MoviesPage.jsx";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <RegisterPage />,
  },

  {
    path: "/",
    element: <RegisterPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/genre",
    element: <GenrePage />,
  },
  {
    path: "/movies",
    element: <MoviesPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
