import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import FormField from '../../common/form-components/FormField';
import FormErrorPrinter from '../../common/form-components/FormErrorPrinter';

// Inspiration for these forms taken from this youtube-tutorial: 
// "How to build elegant React forms with React Hook Form" - https://youtu.be/4oCH5WaJHzk?si=M4qVUkF8kzFF3hSc

const testUsers = [ //For testing of validation. 
    { username: "Lauv", email: "lauvhjell@gmail.com" },
    { username: "Bensamaus", email: "benjamin@gmail.com" },
    { username: "Kanthee", email: "kanthee@gmail.com" }
];

//Usage of Zod: Zod is a TypeScript-first schema declaration and validation library.
const schema = z.object({
    username: z.string(),
    email: z.string(),
    password: z.string(),
    confirmpassword: z.string()
})
// USERNAME VALIDATION
.superRefine(({ username }, checkUsername) => {
    const minLength = 4;
    const maxLength = 32;
    let hasfailed = false;
    
    //Populate possible errors the user may get
    let errObj = {
        usernameLength: { pass: true, message: `Username is between ${minLength} and ${maxLength} long.` },
        usernameInUse: { pass: true, message: `Username is available.` }, 
    };

    // Check if username meets validation requirements
    if (username.length < minLength || username.length > maxLength) {
        errObj = { ...errObj, usernameLength: { ...errObj.usernameLength, pass: false } };
        hasfailed = true;
    }
    if (testUsers.some(user => user.username === username)) { //TODO change to test against actual DB
        errObj = { ...errObj, usernameInUse: { ...errObj.usernameInUse, pass: false } };
        hasfailed = true;
    }

    //If hasFailed, add the errors the user failed
    if (hasfailed) {
        checkUsername.addIssue({
            code: "custom",
            path: ["username"],
            message: errObj,
        });
    }
})
// EMAIL VALIDATION
.superRefine(({ email }, checkEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let hasfailed = false;

    //Populate possible errors the user may get
    let errObj = {
        emailValidation: { pass: true, message: `Email is a valid email` },
        emailInUse: { pass: true, message: `Email is not already registered.` }, //*
        //*Can be a security weakness due to how fast it is to scan what mails are used. Recommended to change. I got to think of an alternative, if time permits it.
    };

    // Check if email meets validation requirements
    if (!emailRegex.test(email)) {
        errObj = { ...errObj, emailValidation: { ...errObj.emailValidation, pass: false } };
        hasfailed = true;
    }
    if (testUsers.some(user => user.email === email)) { //TODO change to test against actual DB
        errObj = { ...errObj, emailInUse: { ...errObj.emailInUse, pass: false } };
        hasfailed = true;
    }

    //If hasFailed, add the errors
    if (hasfailed) {
        checkEmail.addIssue({
            code: "custom",
            path: ["email"],
            message: errObj,
        });
    }
    
})
// PASSWORD VALIDATION
  .superRefine(({ password }, checkPassComplexity) => {
    const containsUppercase = (ch) => /[A-Z]/.test(ch);
    const containsLowercase = (ch) => /[a-z]/.test(ch);
    let countOfUpperCase = 0,
        countOfLowerCase = 0,
        countOfNumbers = 0;
    let hasfailed = false;

    //Count lower, upper and number chars
    for (let i = 0; i < password.length; i++) {
        const ch = password.charAt(i);
        if (!isNaN(+ch)) countOfNumbers++;
        else if (containsUppercase(ch)) countOfUpperCase++;
        else if (containsLowercase(ch)) countOfLowerCase++;
    }

    //Populate possible errors the user may get
    let errObj = {
        passwordLength: { pass: true, message:  "Password is at least 8 characters long" },
        upperCase: { pass: true, message:       "Password contains at least one upper case letter." },
        lowerCase: { pass: true, message:       "Password contains at least one lower case letter." },
        totalNumber: { pass: true, message:     "Password contains at least one number." },
    };

    // Check if password meets validation requirements
    if (countOfLowerCase < 1) {
        errObj = { ...errObj, lowerCase: { ...errObj.lowerCase, pass: false } };
        hasfailed = true;
    }
    if (countOfNumbers < 1) {
        errObj = {
            ...errObj,
            totalNumber: { ...errObj.totalNumber, pass: false },
        };
        hasfailed = true;
    }
    if (countOfUpperCase < 1) {
        errObj = { ...errObj, upperCase: { ...errObj.upperCase, pass: false } };
        hasfailed = true;
    }
    if (password.length < 8) {
        errObj = { ...errObj, passwordLength: { ...errObj.passwordLength, pass: false } };
        hasfailed = true;
    }

    //If hasFailed, add the errors
    if (hasfailed) {
        checkPassComplexity.addIssue({
            code: "custom",
            path: ["password"],
            message: errObj,
        });
    }
})
// CONFIRM PASSWORD VALIDAITON
.superRefine(({ confirmpassword, password }, checkConfirmpassword) => {
    let hasfailed = false;
    
    //Populate possible errors the user may get
    let errObj = {
        passwordConfirmed: { pass: true, message: `Passwords are identical` },
    };

    // Check if password confirmation meets validation requirements
    if (confirmpassword !== password) {
        errObj = { ...errObj, passwordConfirmed: { ...errObj.passwordConfirmed, pass: false } };
        hasfailed = true;
    }

    //If hasFailed, add the errors
    if (hasfailed) {
        checkConfirmpassword.addIssue({
            code: "custom",
            path: ['confirmpassword'],
            message: errObj,
          });
    }
});

// THE ACTUAL FORM
function RegistrationForm({ handleRegistration }) {
    
    const clearedUserInfo = {
        username: "",
        email: "",
        password: "",
        confirmpassword: ""
      };
    const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: clearedUserInfo,
    resolver: zodResolver(schema),
    mode: 'onChange', // Trigger validation on input change
  });

  const handleRegistrationForm = (formValues: object) => {
    handleRegistration(formValues);
  }

    return (
    <>
        <form className="container mt-5" onSubmit={handleSubmit(handleRegistrationForm)}>
        
            <FormField
                label="Username"
                type="text"
                placeholder="Enter username"
                name="username"
                register={register}
            />
            <FormErrorPrinter 
                name='username'
                errors={errors}
            />

            <FormField
                label="Email"
                type="text"
                placeholder="Enter email"
                name="email"
                register={register}
            />
            <FormErrorPrinter 
                name='email'
                errors={errors}
            />


            <FormField
                label="Password"
                type="password"
                placeholder="Enter password"
                name="password"
                register={register}
            />
            <FormErrorPrinter 
                name='password'
                errors={errors}
            />
            
            <FormField
                label="Confirm password"
                type="password"
                placeholder="Confirm password"
                name="confirmpassword"
                register={register}
            />
            <FormErrorPrinter 
                name='confirmpassword'
                errors={errors}
            />

            <button type="submit" className="btn btn-primary">Register</button>
        </form>
        <h4 className='mt-5'>Already registered? <Link to='/' > Back to login</Link></h4>
    </>
    )
}

export default RegistrationForm