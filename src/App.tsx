import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { useMemo } from "react";

function App() {
  const router = useMemo(() => {
    return createBrowserRouter([
      {
        path: "/",
        element: <div>Home</div>,
      },
    ]);
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
