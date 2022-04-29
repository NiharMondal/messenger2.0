import React from "react";
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className="container-fluid overflow-hidden">
      <div className="row auth_section">
        <div className="col-12 col-sm-6 col-md-6 auth_imgage_section">
          <div className=" d-flex justify-content-center">
            <img
              src="/static/login.jpg"
              alt="register-logo"
              className="auth_image"
            />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 auth_regi_section">
          <div className="d-flex justify-content-center">
            <div className="card">
              <div className="card__header">
                <h2>Log in Now</h2>
                <p>to start your journey</p>
              </div>
              <section className="card__body">
                <form className="row  g-md-3 ">
                  
                  <div className="col-md-12">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input type="email" className="form-control" id="email" />
                  </div>

                  <div className="col-12">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input type="password" className="form-control" id="password" />
                  </div>
                  
                  <div className="col-md-12  mx-auto d-grid ">
                    <button type="submit" className="btn  auth_btn">
                      Login
                    </button>
                  </div>

                  <div className="col-12  mt-md-4 text-center">
                    <h6>
                      Don't have an account?{" "}
                      <Link to="/messenger2.0/register">Get started</Link>
                    </h6>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
