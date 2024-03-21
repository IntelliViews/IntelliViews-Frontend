import LoginForm from "./Components/LoginForm"
import { useState } from 'react';

interface User {
    username?: string;
    email?: string;
    password?: string;
}

function Login() {
    const [loggedInUser, setLoggedInUser] = useState<User>({});
  
    const handleLogin = ( values: object ) => {
      //send data to the server here
  
      console.log("Logged in user:", values);
      setLoggedInUser(values);
    };
    
    const logout = () => {
        setLoggedInUser({});
    }

    return (
        <div className="container mt-5">
            {loggedInUser.username ? (
                <>
                    <h2 className="container">Welcome back {loggedInUser.username}!</h2>
                    <button onClick={logout} className="btn btn-primary">Log out</button>
                </>
            ) : (
                <>
                    <h2 className="container">Welcome back</h2>
                    <LoginForm handleLogin={handleLogin} />
                </>
            )}
        </div>
    )
}

export default Login