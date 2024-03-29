import { Link } from "react-router-dom";
import Login from "./components/Login/Login";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-7">
          {" "}
          {/* style={{ backgroundColor: "grey" }} */}
          <div className="container">
            <h1>Welcome to IntelliViews</h1>
            <h3>
              Unlock Your Potential: Elevate Your Interview Skills with AI!
            </h3>

            <p className="mt-5">
              At IntelliViews, we understand the importance of mastering your
              interview skills to land your dream job. Whether you're aiming for
              a position in tech, finance, healthcare, or any other industry,
              we're here to help you excel.
            </p>
          </div>
          <div className="container mt-5">
            <p>
              Our AI-powered mock-interview platform is designed to provide
              personalized guidance tailored to your specific career goals.
              Here's how it works:
            </p>
          </div>
          <div className="container mt-5">
            <ol>
              <li>
                <b>Select Your Industry and Job Title: </b>
                Tell us which industry you're targeting and the job title you're
                practicing for. This helps us customize the interview questions
                and feedback to suit your needs.
              </li>
              <li>
                <b>Mock-Interview Session: </b>
                Engage in a realistic mock-interview session with our AI
                chatbot. Answer a series of questions just like you would in a
                real interview.
              </li>
              <li>
                <b>Receive Feedback and Rating: </b>
                After the session, our AI will rate your performance on a scale
                of 1 to 10 and provide detailed feedback on areas for
                improvement.
              </li>
              <li>
                <b>Track Your Progress: </b>
                Keep track of your performance and progress over time. Your
                scores, feedback, and chat history are saved to your profile
                page for easy reference.
              </li>
              <li>
                <b>Responsive Design: </b>
                Our platform is responsive and accessible across all devices, so
                you can practice your interview skills anytime, anywhere.
              </li>
            </ol>
          </div>
          <div className="container mt-5 mb-5">
            <h4>Ready to take your interview skills to the next level?</h4>
            <h5 className="mt-3">
              <Link to="/registration">Sign up now</Link> and start your journey
              towards interview success with IntelliViews!
            </h5>
          </div>
        </div>

        <div className="col-5">
          {" "}
          {/* style={{ backgroundColor: "blue" }} */}
          {/* Login component will be here, just some tempcode and templogo here ATM*/}
          <div className="container mt-5 d-flex justify-content-center">
            <img src="/src/assets/images/logo/logo.png" width="100px" alt="" />
          </div>
          <h1 className="container d-flex justify-content-center">
            IntelliViews
          </h1>
          <Login />
        </div>
      </div>
    </div>
  );
}
