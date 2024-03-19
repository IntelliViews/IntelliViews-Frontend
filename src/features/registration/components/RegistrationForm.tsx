import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import FormField from './FormField';

const schema = z.object({
    username: z.string(),
    email: z.string(),
    password: z.string(),
    confirmpassword: z.string()
})
.superRefine(({ username }, checkUsername) => {
    const minLength = 4;
    const maxLength = 32;
    let hasfailed = false;
    
    let errObj = {
        usernameLength: { pass: true, message: `Username must be between ${minLength} and ${maxLength} long.` },
        //usernameInUse: { pass: true, message: `Username is already taken.` }, //TODO. check if username is taken.
    };

    // Check if username meets length requirements
    if (username.length < minLength || username.length > maxLength) {
        errObj = { ...errObj, usernameLength: { ...errObj.usernameLength, pass: false } };
        hasfailed = true;
    }

    if (hasfailed) {
        checkUsername.addIssue({
            code: "custom",
            path: ["username"],
            message: errObj,
        });
    }
})
.superRefine(({ email }, checkEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let hasfailed = false;

    let errObj = {
        emailValidation: { pass: true, message: `Email is not a valid email` },
        //emailInUse: { pass: true, message: `Email is already registered.` }, //TODO. check if email is already in use.
    };

    // Check if email meets validation requirements
    if (!emailRegex.test(email)) {
        errObj = { ...errObj, emailValidation: { ...errObj.emailValidation, pass: false } };
        hasfailed = true;
    }

    if (hasfailed) {
        checkEmail.addIssue({
            code: "custom",
            path: ["email"],
            message: errObj,
        });
    }
    
})
  .superRefine(({ password }, checkPassComplexity) => {
    const containsUppercase = (ch) => /[A-Z]/.test(ch);
    const containsLowercase = (ch) => /[a-z]/.test(ch);
    let countOfUpperCase = 0,
        countOfLowerCase = 0,
        countOfNumbers = 0;
    let hasfailed = false;

    for (let i = 0; i < password.length; i++) {
        const ch = password.charAt(i);
        if (!isNaN(+ch)) countOfNumbers++;
        else if (containsUppercase(ch)) countOfUpperCase++;
        else if (containsLowercase(ch)) countOfLowerCase++;
    }

    let errObj = {
        passwordLength: { pass: true, message: "Password must at least be 8 characters long" },
        upperCase: { pass: true, message: "Password must contain at least one upper case letter." },
        lowerCase: { pass: true, message: "Password must contain at least one lower case letter." },
        totalNumber: { pass: true, message: "Password must contain at least one number." },
    };

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

    if (hasfailed) {
        checkPassComplexity.addIssue({
            code: "custom",
            path: ["password"],
            message: errObj,
        });
    }
})
.superRefine(({ confirmpassword, password }, checkConfirmpassword) => {
    let hasfailed = false;
    let errObj = {
        passwordConfirmed: { pass: true, message: `Passwords must be identical` },
    };

    //Checks if password is correctly confirmed
    if (confirmpassword !== password) {
        errObj = { ...errObj, passwordConfirmed: { ...errObj.passwordConfirmed, pass: false } };
        hasfailed = true;
    }

    if (hasfailed) {
        checkConfirmpassword.addIssue({
            code: "custom",
            path: ['confirmpassword'],
            message: errObj,
          });
    }
});


function RegistrationForm({ onSave, newUser }) {
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: newUser, resolver: zodResolver(schema) });

  const handleSave = (formValues: object) => {
    onSave(formValues);
  }

    return (
      <form className="container mt-5" onSubmit={handleSubmit(handleSave)}>
      <FormField
        label="Username"
        type="text"
        placeholder="Enter username"
        name="username"
        register={register}
        errors={errors}
      />

      <FormField
        label="Email"
        type="text"
        placeholder="Enter email"
        name="email"
        register={register}
        errors={errors}
      />

      <FormField
        label="Password"
        type="password"
        placeholder="Enter password"
        name="password"
        register={register}
        errors={errors}
      />

      <FormField
        label="Confirm password"
        type="password"
        placeholder="Confirm password"
        name="confirmpassword"
        register={register}
        errors={errors}
      />

      <button type="submit" className="btn btn-primary">Register</button>
    </form>
    )
}

export default RegistrationForm