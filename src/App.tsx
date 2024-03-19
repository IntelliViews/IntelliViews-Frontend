import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { useMemo } from "react";
import MainLayout from "./features/layouts/MainLayout";
import Home from "./features/home/Home";
import Profile from "./features/profile/Profile";
import RegistrationPage from "./registration/RegistrationPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Chat from "./features/chat/Chat";

function App() {
  const router = useMemo(() => {
    return createBrowserRouter([
      {
        path: "/",
        element: <MainLayout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/profile", element: <Profile /> },
          { path: "/interview", element: <Chat /> },
        ],
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },
    ]);
  }, []);

  return (
    <div className="iv-container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
