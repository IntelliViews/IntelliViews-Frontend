import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { useMemo } from "react";
import MainLayout from "./features/layouts/MainLayout";
import Home from "./features/home/Home";
import Profile from "./features/profile/Profile";
import Registration from "./features/registration/Registration";
import "bootstrap/dist/css/bootstrap.min.css";
import Chat from "./features/chat/Chat";
import AdminPage from "./features/admin-page/AdminPage";

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
          { path: "/registration", element: <Registration /> },
          { path: "/admin", element: <AdminPage /> },
        ],
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
