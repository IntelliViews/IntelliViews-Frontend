import { useCookies } from "react-cookie";
import { AuthContext } from "../../../../App";
import { login } from "../../../../services/AuthService";
import LoginForm from "./Components/LoginForm";
import { useContext, useState } from "react";
import { CookiesProvider } from "react-cookie";

interface LoginUser {
  email: string;
  password: string;
}

function Login() {
  const [cookies, setCookie, removeCookie] = useCookies(["user_token"]);

  const { userContext } = useContext(AuthContext)!;
  const [error, setError] = useState();
  const [user, setUser] = userContext;
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // New state for success message

  const handleLogin = (values: LoginUser) => {
    //send data to the server here
    login(values)
      .then((data: any) => {
        sessionStorage.setItem("user", JSON.stringify(data.data));
        setUser(data.data);
        setSuccessMessage(data.message);
        setCookie("user_token", data.data.token, { path: "/" });
        setError(null); // Reset error state on successful login
      })
      .catch((err) => {
        setError(err.response.data.message);
        setSuccessMessage(null);
        removeCookie("user_token");
      });
  };

  const logout = () => {
    removeCookie("user_token", { path: "/" });
    setUser(null);
    setSuccessMessage(null);
  };

  return (
    <div className="container mt-5">
      <CookiesProvider>
        <div>
          {user ? (
            <>
              <h2 className="container">Welcome back {user.username}!</h2>
              <button onClick={logout} className="btn btn-primary">
                Log out
              </button>
            </>
          ) : (
            <>
              <h2 className="container">Login</h2>
              <LoginForm handleLogin={handleLogin} />
            </>
          )}

          {error && <p style={{ color: "red" }}>{error}</p>}
          {successMessage && <p style={{ color: "cyan" }}>{successMessage}</p>}
        </div>
      </CookiesProvider>
    </div>
  );
}

export default Login;
