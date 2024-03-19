import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="iv-container">
      <div className="iv-content">
        <div className="container mt-5">
          <div className="row">
            <div className="col-7"> {/* style={{ backgroundColor: "grey" }} */}

              <div className="container mt-5">
                <h2>Welcome to IntelliViews</h2>

                <p className="mt-5">
                  At IntelliViews, we understand the importance of mastering your interview skills to land your dream job. Whether you're aiming for a position in tech, finance, healthcare, or any other industry, we're here to help you excel.
                </p>
              </div>
              
              <div className="container mt-5">
                <p>
                  Our AI-powered mock-interview platform is designed to provide personalized guidance tailored to your specific career goals. Here's how it works:
                </p>
              </div>

              <div className="container mt-5">
                <ol>
                  <li>
                    Select Your Industry and Job Title: 
                    Tell us which industry you're targeting and the job title you're practicing for. This helps us customize the interview questions and feedback to suit your needs.
                  </li>
                  <li>
                    Mock-Interview Session: 
                    Engage in a realistic mock-interview session with our AI chatbot. Answer a series of questions just like you would in a real interview.
                  </li>
                  <li>
                    Receive Feedback and Rating: 
                    After the session, our AI will rate your performance on a scale of 1 to 10 and provide detailed feedback on areas for improvement.
                  </li>
                  <li>
                    Track Your Progress: 
                    Keep track of your performance and progress over time. Your scores, feedback, and chat history are saved to your profile page for easy reference.
                  </li>
                  <li>
                    Responsive Design: 
                    Our platform is responsive and accessible across all devices, so you can practice your interview skills anytime, anywhere.
                  </li>
                </ol>
              </div>
              
              <div className="container mt-5 mb-5">
                <h4>
                  Ready to take your interview skills to the next level?
                </h4>
                <h5 className="mt-3">
                  <Link to="/registration">Sign up now</Link> and start your journey towards interview success with InterviewBoost!
                </h5>
              </div>

            </div>

            <div className="col-5" > {/* style={{ backgroundColor: "blue" }} */}
              {/* Login component will be here, just some tempcode and templogo here ATM*/}
              <div className="container mt-5 d-flex justify-content-center">
                <img src="/src/assets/images/logo/logo.png" width="100px" alt="" />
              </div>
              <h1 className="container d-flex justify-content-center">IntelliViews</h1>

              <div className="container mt-5">
                <h2 className="">Welcome back</h2>
                <p className="mt-3">Let's log in to your account</p>
              </div>

              <form className="container mt-5">
                  <div className="mb-3">
                    <label className="form-label">Your email:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ex: nigel@boolean.co.uk"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Your password"
                    />
                  </div>
                <button type="submit" className="mb-5 btn btn-primary">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
