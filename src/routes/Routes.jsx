import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import FriendDetails from "../pages/friendDetails/FriendDetails";
import Timeline from "../pages/timeline/Timeline";
import Stats from "../pages/stats/Stats";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/friend/:id", element: <FriendDetails /> },
      { path: "/timeline", element: <Timeline /> },
      { path: "/stats", element: <Stats /> },
    ],
  },
]);

export default router;