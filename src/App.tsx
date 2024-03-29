import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { useEffect, useMemo, useState } from "react";
import MainLayout from "./features/layouts/MainLayout";
import Home from "./features/home/Home";
import Profile from "./features/profile/Profile";
import Registration from "./features/registration/Registration";
import "bootstrap/dist/css/bootstrap.min.css";
import Chat from "./features/chat/Chat";
import { createContext } from "react";
import AdminPage from "./features/admin-page/AdminPage";
import Login from "./features/home/components/Login/Login";

type AuthContextType = {
  userContext: any[];
};
export const AuthContext = createContext<AuthContextType | null>(null);

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const sessionUser = sessionStorage.getItem("user");
    if (!sessionUser) return;
    setUser(JSON.parse(sessionUser));
  }, []);

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
          { path: "/login", element: <Login /> },
        ],
      },
    ]);
  }, []);

  return (
    <div className="iv-container">
      <AuthContext.Provider value={{ userContext: [user, setUser] }}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
