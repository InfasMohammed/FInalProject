import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //     e.preventDefault()
  //     axios.post('http://localhost:3001/register', {name,email,password})
  //     .then(res =>{
  //         alert("Created")
  //         navigate('/login')
  //     }).catch(err => console.log(err))
  // }

  return (
    <>
      <Header />
      <section id="footer">
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="bg-warning-emphasis bg-gradient p-3 rounded sigup_section">
            <h2 className="text-center">Signup</h2>
            {/* <form onSubmit={handleSubmit}> */}
            <form>
              <div className="mb-3">
                <label htmlFor="email">
                  <strong>Name</strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  autoComplete="off"
                  name="email"
                  // onChange={(e) => setName(e.target.value)}
                  className="form-control rounded-0.5 text-body-secondary"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email">
                  <strong>Email</strong>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  autoComplete="off"
                  name="email"
                  // onChange={(e) => setEmail(e.target.value)}
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
                  // onChange={(e) => setPassword(e.target.value)}
                  className="form-control rounded-0.5 text-body-secondary"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="signup shadow-lg w-50 rounded-5 text-center"
                >
                  Signup
                </button>
              </div>
            </form>
            <br />
            <p className="text-align-center">
              Already have an Account{" "}
              <Link to={"/login"} className="text-warning rounded">
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Signup;
