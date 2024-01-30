import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Dashboard = React.lazy(() => import("src/views/Dashboard/index"));
const GameView = React.lazy(() => import("src/views/Game"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback="nested fallback">
        <Dashboard />
      </Suspense>
    ),
  },
  {
    path: "/games/:gameType",
    element: (
      <Suspense fallback="nested fallback">
        <GameView />
      </Suspense>
    ),
  },
  // {
  //   path: "/first-second-third",
  //   element: (
  //     <Suspense fallback="nested fallback">
  //       <FirstSecondThird />
  //     </Suspense>
  //   ),
  // },
  // {
  //   path: "/take-all",
  //   element: (
  //     <Suspense fallback="nested fallback">
  //       <Dashboard />
  //     </Suspense>
  //   ),
  // },
  // {
  //   path: "/twenty-one",
  //   element: (
  //     <Suspense fallback="nested fallback">
  //       <Dashboard />
  //     </Suspense>
  //   ),
  // },
  // {
  //   path: "/score-manual",
  //   element: (
  //     <Suspense fallback="nested fallback">
  //       <Dashboard />
  //     </Suspense>
  //   ),
  // },
]);
