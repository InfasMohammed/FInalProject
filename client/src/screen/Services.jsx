import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
import PaymentInfo from "./PaymentInfo";
import { Link } from "react-router-dom";


const Services = () => {
  return (
    <>
      {/* <Header /> */}
      <section className="services">
        <div className="container">
          <h1 className="text-center display-3 fw-bold theme-text">
            Our <span className="text-black">Services</span>
          </h1>
          <hr className="mx-auto mb-5 w-25" />
          <div className="row mb-5 row-gap-3">
            <div className="col-12 col-sm-6 col-lg-3 m-auto">
              {/* card starts here */}
              <div className="card shadow">
                <img
                  src="https://images.unsplash.com/photo-1604594849809-dfedbc827105?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="card-img-top"
                />
                <div className="card-body">
                  <h3 className="text-center">Invest Title</h3>
                  <hr className="mx-auto w-75" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    eligendi soluta est veniam sequi nemo, quas delectus eveniet
                    ducimus rem animi. Natus non earum deleniti aliquam
                  </p>
                  <Link
                    className="signup shadow-lg w-50 rounded-5 text-center bg-secondary"
                    to={"/payment"}
                  >
                    Invest
                  </Link>
                </div>
              </div>
              {/* card ends here */}
            </div>
            {/* col ends here */}
            <div className="col-12 col-sm-6 col-lg-3 m-auto">
              {/* card starts here */}
              <div className="card shadow">
                <img
                  src="https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&fit=crop&q=80&w=1973&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="card-img-top"
                />
                <div className="card-body">
                  <h3 className="text-center">App Development</h3>
                  <hr className="mx-auto w-75" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    eligendi soluta est veniam sequi nemo, quas delectus eveniet
                    ducimus rem animi. Natus non earum deleniti aliquam
                  </p>
                  <Link
                    className="signup shadow-lg w-50 rounded-5 text-center bg-secondary"
                    to={"/payment"}
                  >
                    Invest
                  </Link>
                </div>
              </div>
              {/* card ends here */}
            </div>
            {/* col ends here */}
            <div className="col-12 col-sm-6 col-lg-3 m-auto">
              {/* card starts here */}
              <div className="card shadow">
                <img
                  src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="card-img-top"
                />
                <div className="card-body">
                  <h3 className="text-center">Digital Marketing</h3>
                  <hr className="mx-auto w-75" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    eligendi soluta est veniam sequi nemo, quas delectus eveniet
                    ducimus rem animi. Natus non earum deleniti aliquam
                  </p>
                  <Link
                    className="signup shadow-lg w-50 rounded-5 text-center bg-secondary"
                    to={"/payment"}
                  >
                    Invest
                  </Link>
                </div>
              </div>
              {/* card ends here */}
            </div>
            {/* col ends here */}
            <div className="col-12 col-sm-6 col-lg-3 m-auto">
              {/* card starts here */}
              <div className="card shadow">
                <img
                  src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="card-img-top"
                />
                <div className="card-body">
                  <h3 className="text-center">Email Marketing</h3>
                  <hr className="mx-auto w-75" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    eligendi soluta est veniam sequi nemo, quas delectus eveniet
                    ducimus rem animi. Natus non earum deleniti aliquam
                  </p>
                  <Link
                    className="signup shadow-lg w-50 rounded-5 text-center bg-secondary"
                    to={"/payment"}
                  >
                    Invest
                  </Link>
                </div>
              </div>
              {/* card ends here */}
            </div>
            {/* col ends here */}
          </div>
        </div>
      </section>
      {/* <Footer /> */}

      {/* <PaymentInfo /> */}
    </>
  );
};

export default Services;
