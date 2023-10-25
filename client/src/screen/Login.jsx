import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      // Check for empty fields and display an error message
      setLoginError("Both email and password fields are required.");
      return;
    }

    axios
      .post("http://localhost:3001/login", formData)
      .then((res) => {
        if (res.data.Status === "Success") {
          if (res.data.role === "admin") {
            navigate("/dashboard");
          } else {
            navigate("/invest");
          }
        } else {
          // Data not found in the database
          setLoginError("This username and password do not exist in the Database");
        }
      })
      .catch((err) => {
        console.log("An error occurred", err);
        // Handle other errors here
      });
  };

  return (
    <div>
      <Header />
      <section id="footer">
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="bg-warning-emphasis bg-gradient p-3 rounded sigup_section">
            <h2 className="text-center">Login</h2>
            <form onSubmit={handleSubmit}>
              {loginError && (
                <div className="alert alert-danger">{loginError}</div>
              )}
              <div className="mb-3">
                <label htmlFor="email">
                  <strong>Email</strong>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  autoComplete="off"
                  name="email"
                  onChange={handleInputChange}
                  className="form-control rounded-0.5 text-body-secondary"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password">
                  <strong>Password</strong>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  autoComplete="off"
                  name="password"
                  onChange={handleInputChange}
                  className="form-control rounded-0.5 text-body-secondary"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="signup shadow-lg w-50 rounded-5 text-center"
                >
                  Login
                </button>
              </div>
            </form>
            <br />
            <p className="text-align-center">
              If you don't have an account?{" "}
              <Link to={"/signup"} className="text-warning rounded">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;