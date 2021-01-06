import { useState } from "react";
import LoginWrapper from "./styles.login";

export const Login = () => {
  const [show, setshow] = useState(true);
  const [signup, setsignup] = useState({
    name: "",
    email: "",
    mobile: "",
    dob: null,
    pass: "",
  });
  const handleChange = (e) => {
    setsignup({ ...signup, dob: e.target.value });
  };
  return (
    <>
      <LoginWrapper>
        <div className="bkg-animated">
          <input type="checkbox" id="toggle" checked={!show} />
          <div className="container">
            <div className="switch-outer">
              <label
                onClick={() => setshow((val) => !val)}
                for="toggle"
                id="switch"
              >
                <b>
                  {show
                    ? "Don't have an account? SIGN UP"
                    : "Already have an account? SIGN IN"}
                </b>
              </label>
            </div>
            <div className="flipper">
              <div id="login">
                <div className="title">
                  <h2>Sign In</h2> <br />
                </div>
                <form action="" autocomplete="off">
                  <label for="email-input"></label>
                  <input
                    id="email-input"
                    type="email"
                    name="mail"
                    placeholder="Email-ID"
                  />{" "}
                  <br />
                  <label for="email-input"></label>
                  <input
                    id="pass-input"
                    type="password"
                    name="pass"
                    placeholder="Password"
                  />
                  <br />
                  <br />
                  <br />
                  <span id="remember-me">
                    <label for="remember-checkbox">Remember me</label> &nbsp;
                    <input id="remember-checkbox" type="checkbox" />
                  </span>
                  <span id="forgot">
                    <a href="#">Forgot Password?</a>
                  </span>{" "}
                  <br />
                  <input
                    id="login-button"
                    type="submit"
                    name="login"
                    value="Login"
                  />{" "}
                  <br />
                  <br />
                  <hr style={{ border: "0.7px solid black" }} /> <br />
                  <input
                    id="login-google-button"
                    type="submit"
                    name="login"
                    value="Login with Google"
                  />{" "}
                  <br />
                </form>
              </div>
              <div id="sign-up">
                <div className="title">
                  <h2>Sign Up</h2> <br />
                </div>
                <form action="" autocomplete="off">
                  <input
                    id="uname-sign-up"
                    type="text"
                    name="mail"
                    placeholder="Username"
                  />{" "}
                  <br />
                  <input
                    type="date"
                    placeholder="YYYY-MM-DD"
                    onChange={handleChange}
                    value={signup.dob}
                  />
                  <input
                    id="email-sign-up"
                    type="email"
                    name="mail"
                    placeholder="Email-ID"
                  />{" "}
                  <br />
                  <input
                    id="pass-sign-up"
                    type="password"
                    name="pass"
                    placeholder="Password"
                  />
                  <br />
                  <input
                    id="confirm-pass-sign-up"
                    type="password"
                    name="pass"
                    placeholder="Confirm Password"
                  />
                  <br />
                  <br />
                  <label for="" id="tnc">
                    {" "}
                    &nbsp;*By clicking Sign Up, you agree to our Terms, Data
                    Policy and Cookie Policy.{" "}
                  </label>
                  <br />
                  <br />
                  <input
                    id="sign-up-button"
                    type="submit"
                    name="sign-up"
                    value="Sign-Up"
                  />{" "}
                  <br />
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>
      </LoginWrapper>
    </>
  );
};
