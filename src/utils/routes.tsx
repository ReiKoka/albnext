import { createBrowserRouter } from "react-router";
import Login from "../routes/Login";
import AppLayout from "../routes/AppLayout";
import LandingPage from "../routes/LandingPage";
import WhyAlbania from "../routes/WhyAlbania";

const hostname = window.location.hostname;
const isAdmin = hostname.startsWith("admin");

export const router = createBrowserRouter([
  {
    path: "/",
    element: isAdmin ? <Login /> : <AppLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/why-albania", element: <WhyAlbania /> },
    ],
  },
]);

export default router;
