import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./routes/AppLayout";
import Login from "./routes/Login";
import { ThemeProvider } from "./context/ThemeContext";

const hostname = window.location.hostname;
const isAdmin = hostname.startsWith("admin");

console.log(hostname, isAdmin);

const router = createBrowserRouter([
  {
    path: "/",
    element: isAdmin ? <Login /> : <AppLayout />,
  },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
