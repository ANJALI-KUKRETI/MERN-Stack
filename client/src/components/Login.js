import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="signin">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="signin-form">
              <h2 className="form-title">Sign up</h2>
              <form className="signin-form" id="signin-form">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Your email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Sign in"
                  />
                </div>
                <NavLink to="/signup">Not have account? Sign up Here</NavLink>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
