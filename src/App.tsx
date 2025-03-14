import { createBrowserRouter, RouterProvider } from "react-router";

import { ThemeProvider } from "./context/ThemeContext";
import { NavHeightProvider } from "./context/NavHeightContext";
import { MobileNavProvider } from "./context/MobileNavContext";

import AppLayout from "./routes/AppLayout";
import Login from "./routes/Login";
import WhyAlbania from "./routes/WhyAlbania";
import LandingPage from "./routes/LandingPage";

const hostname = window.location.hostname;
const isAdmin = hostname.startsWith("admin");

const router = createBrowserRouter([
  {
    path: "/",
    element: isAdmin ? <Login /> : <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/why-albania",
        element: <WhyAlbania />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider>
      <NavHeightProvider>
        <MobileNavProvider>
          <RouterProvider router={router} />
        </MobileNavProvider>
      </NavHeightProvider>
    </ThemeProvider>
  );
}

export default App;
