import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLoginUserMutation } from "../redux/features/authSlice";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [loginUser, { data }] = useLoginUserMutation();
  const [token, setToken] = useState("");
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const inputHandle = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setMessage(data);

    if (data?.token) {
      setToken(data?.token);
      localStorage.setItem("authToken", token);
      toast.success(message?.success);
      setTimeout(() => {
        navigate("/messenger2.0/home", { replace: true });
      }, 2000);
    } else if (data?.error) {
      return toast.error(message?.error);
    }
  }, [data, message, navigate, token]);

  //===========login user=============
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await loginUser(state);
    } catch (e) {
      console.log(e,"hello");
    }
  };
  return (
    <div className="container-fluid overflow-hidden">
      <ToastContainer error={true} autoClose={2000} />
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
                <form className="row  g-md-3 " onSubmit={handleLogin}>
                  <div className="col-md-12">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      onChange={inputHandle}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      onChange={inputHandle}
                    />
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
