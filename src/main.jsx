import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ProjectDetails from "./details/ProjectDetails";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h1>404 not found</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/projects/:projectId",
        element: <ProjectDetails />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
