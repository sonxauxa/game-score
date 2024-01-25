import React from "react";
import { createBrowserRouter } from "react-router-dom";
const Dashboard = React.lazy(() => import("src/views/Dashboard/index"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);
