import { useForm } from "react-hook-form";
import FormField from "../../../../common/form-components/FormField";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const testUsers = [
  //For testing of validation.
  { username: "Lauv", email: "lauvhjell@gmail.com", password: "Password123" },
  {
    username: "Bensamaus",
    email: "benjamin@gmail.com",
    password: "Password123",
  },
  { username: "Kanthee", email: "kanthee@gmail.com", password: "Password123" },
];

// Not in usee..
const schema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
  })
  .superRefine(({ email, password }, ctx) => {
    const user = testUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (!user) {
      ctx.addIssue({
        code: "custom",
        message: "User is not in the system ",
      });
    }
  });

function LoginForm({ handleLogin }) {
  const clearedUserInfo = {
    username: "",
    email: "",
  };
  // const {register, handleSubmit, formState: { errors }} = useForm({
  //     defaultValues: clearedUserInfo,
  //     resolver: zodResolver(schema)
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: clearedUserInfo,
  });

  const handleLoginForm = (formValues: { email: string; password: string }) => {
    const { email, password } = formValues;
    const loginUser: any = {
      email: email,
      password: password,
    };
    handleLogin(loginUser);
    // Check if the provided email and password match any user in the testUsers array

    //Check this!
    // const user = testUsers.find(user => user.email === email && user.password === password);
    // if (!user) {
    //     return; // If no user is found, stop further execution
    // }
    // user.username = "testuser"; // <----------------THIS IS JUST A FILLER TO TEST THE LOGIN NAME GREETING!
  };

  return (
    <form onSubmit={handleSubmit(handleLoginForm)} className="container mt-5">
      <FormField
        label="email"
        type="text"
        placeholder="Ex: nigel@boolean.co.uk"
        name="email"
        register={register}
      />

      <FormField
        label="password"
        type="password"
        placeholder="Your password"
        name="password"
        register={register}
      />

      {/* Simpler more general feedback than registration form to the user for security measures */}
      {Object.keys(errors).length > 0 && (
        <div style={{ color: "red" }}>
          <p>Provided login information is incorrect.</p>
        </div>
      )}

      <button type="submit" className="mb-5 btn btn-primary">
        Log in
      </button>
    </form>
  );
}

export default LoginForm;
