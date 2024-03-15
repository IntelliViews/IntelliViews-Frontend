import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { useMemo } from "react";
import MainLayout from "./features/layouts/MainLayout";
import Home from "./features/home/Home";

function App() {
  const router = useMemo(() => {
    return createBrowserRouter([
      {
        path: "/",
        element: <MainLayout />,
        children: [{ path: "/", element: <Home /> }],
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
