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
                  <h2>Sign In</h2>
                </div>
                <form action="" autocomplete="off">
                  <label for="email-input"></label>
                  <input
                    id="email-input"
                    type="email"
                    name="mail"
                    placeholder="Email-ID"
                  />
                  <label for="email-input"></label>
                  <input
                    id="pass-input"
                    type="password"
                    name="pass"
                    placeholder="Password"
                  />
                  <span id="remember-me">
                    <label for="remember-checkbox">Remember me</label> &nbsp;
                    <input id="remember-checkbox" type="checkbox" />
                  </span>
                  <span id="forgot">
                    <a href="#">Forgot Password?</a>
                  </span>
                  <input
                    id="login-button"
                    type="submit"
                    name="login"
                    value="Login"
                  />
                  <hr style={{ border: "0.7px solid black" }} />
                  <a href="/auth/google" value="Login with Google">
                    Login with Google
                  </a>
                </form>
              </div>
              <div id="sign-up">
                <div className="title">
                  <h2>Sign Up</h2>
                </div>
                <form action="" autocomplete="off">
                  <input
                    id="uname-sign-up"
                    type="text"
                    name="mail"
                    placeholder="Full Name"
                  />
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
                    placeholder="Email-ID or Phone"
                  />
                  <input
                    id="pass-sign-up"
                    type="password"
                    name="pass"
                    placeholder="Password"
                  />
                  <input
                    id="confirm-pass-sign-up"
                    type="password"
                    name="pass"
                    placeholder="Confirm Password"
                  />
                  <label for="" id="tnc">
                    &nbsp;*By clicking Sign Up, you agree to our Terms, Data
                    Policy and Cookie Policy.
                  </label>
                  <input
                    id="sign-up-button"
                    type="submit"
                    name="sign-up"
                    value="Sign-Up"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </LoginWrapper>
    </>
  );
};
