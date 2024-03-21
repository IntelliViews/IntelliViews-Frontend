import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import { AuthContext } from "../../App";
import { register } from "../../services/AuthService";

function Registration() {
  const { userContext } = useContext(AuthContext)!;
  const [error, setError] = useState();
  const [user, setUser] = userContext;

  const handleRegistration = (values: object) => {
    //send data to the server here
    register(values)
      .then((data: any) => {
        setUser(data.data);
      })
      .catch((err) => setError(err.response.data.message));
  };

  return (
    <div className="container mt-5">
      <h2>Register your account</h2>
      <RegistrationForm handleRegistration={handleRegistration} />
      {user && (
        <>
          <h2>New account registered</h2>
          <h5>Username:</h5>
          <p>{user.userName}</p>
          <h5>Email:</h5>
          <p>{user.email}</p>
          <Link to="/" className="btn btn-primary">
            To Login
          </Link>
        </>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Registration;
