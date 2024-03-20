import { useState } from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from "./components/RegistrationForm";

interface User {
  username?: string;
  email?: string;
}

function Registration() {
  const [registeredUser, setRegisteredUser] = useState<User>({});

  const handleRegistration = ( values: object ) => {
    //send data to the server here

    console.log("Registered user:", values);
    setRegisteredUser(values);
  };

  if(!registeredUser.username) {

    return (
      <div className="container mt-5">
        <h2>Register your account</h2>
        <RegistrationForm handleRegistration={handleRegistration} />
      </div>
    );

  } else {
    //Alternatively, we can use a custom "registered" page.
    return (
      <div className="container mt-5">
        <h2>New account registered</h2>
        <h5>Username:</h5>
        <p>{registeredUser.username}</p>
        <h5>Email:</h5>
        <p>{registeredUser.email}</p>
        <Link to="/" className="btn btn-primary">To Login</Link>
        {/* <p> Please check your email to validate your account. </p> */}
      </div>
    )

  }

}

export default Registration;
