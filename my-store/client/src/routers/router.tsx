import { createBrowserRouter } from "react-router-dom";
import FrontendLayout from "../layouts/FrontendLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import FrontendHomepage from "../pages/frontend/Home/Home";
import AdminDashboardHomepage from "../pages/frontend/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontendLayout />,
    children: [
      {
        index: true,
        element: <FrontendHomepage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboardHomepage />,
      },
    ],
  },
]);

export default router;
