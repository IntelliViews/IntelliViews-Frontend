import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { useMemo } from "react";
import RegistrationPage from "./registration/RegistrationPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const router = useMemo(() => {
    return createBrowserRouter([
      {
        path: "/",
        element: <div>Home</div>,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },

    ]);
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
