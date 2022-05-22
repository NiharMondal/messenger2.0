import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useRegisterUserMutation } from "../redux/features/authSlice";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [state, setState] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    photo: "",
  });
  const [file, setFile] = useState(null);
  const [registerUser, { data }] = useRegisterUserMutation();
  const [message, setMessage] = useState("");
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
  }, [message, data, token, navigate]);
  //======= input =======
  const inputHandle = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  //=======file handle========
  const fileHandle = (e) => {
    setState({ ...state, [e.target.name]: e.target.files[0] });

    const reader = new FileReader();
    reader.onload = () => {
      setFile(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  //=========Register user=========
  const handleRegister = async (e) => {
    e.preventDefault();

    const { userName, email, password, confirmPassword, photo } = state;

    try {
      const formData = await new FormData();

      formData.append("photo", photo);
      formData.append("userName", userName);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("confirmPassword", confirmPassword);

      await registerUser(formData);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container-fluid overflow-hidden">
      <ToastContainer error={true} autoClose={2000} />
      <div className="row auth_section">
        <div className="col-12 col-sm-6 col-md-6 auth_imgage_section">
          <div className=" d-flex justify-content-center">
            <img
              src="/static/register.jpg"
              alt="register-logo"
              className="auth_image"
            />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 auth_regi_section">
          <div className="d-flex justify-content-center">
            <div className="card">
              <div className="card__header">
                <h2>Register here</h2>
                <p>to join our community</p>
              </div>
              <section className="card__body">
                <form className="row  g-md-3" onSubmit={handleRegister}>
                  <div className="col-md-6">
                    <label htmlFor="fullName" className="form-label">
                      Fullname
                    </label>
                    <input
                      onChange={inputHandle}
                      name="userName"
                      type="text"
                      className="form-control"
                      id="fullName"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      onChange={inputHandle}
                      name="email"
                      type="email"
                      className="form-control"
                      id="email"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      onChange={inputHandle}
                      name="password"
                      type="password"
                      className="form-control"
                      id="password"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      onChange={inputHandle}
                      name="confirmPassword"
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <div className="file_image">
                      <div className="image">
                        {file ? <img src={file} alt="" /> : null}
                      </div>
                      <div className="file">
                        <label htmlFor="photo">Select Image</label>
                        <input
                          onChange={fileHandle}
                          name="photo"
                          type="file"
                          className="form-control file_control"
                          id="photo"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6  mx-auto d-grid ">
                    <button type="submit" className="btn  auth_btn">
                      Register
                    </button>
                  </div>

                  <div className="col-12  mt-md-4 text-center">
                    <h6>
                      Already have an account?{" "}
                      <Link to="/messenger2.0/login">Login here</Link>{" "}
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

export default Register;
