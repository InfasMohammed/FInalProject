import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <>
      <Header />
      <div className="m-30rem">
      <title>Our Services</title>
      <div className="container-fluid">
        <h1 className="text-center mt-5 display-3 fw-bold">
          Our <span className="theme-text">Services</span>
        </h1>
        <hr className="mx-auto mb-5 w-25" />
        <div className="row mb-5">
          <div className="col-12 col-sm-6 col-md-3 m-auto">
            {/* card starts here */}
            <div className="card shadow">
              <img src="images/web.svg" alt="" className="card-img-top" />
              <div className="card-body">
                <h3 className="text-center">Web Development</h3>
                <hr className="mx-auto w-75" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  eligendi soluta est veniam sequi nemo, quas delectus eveniet
                  ducimus rem animi. Natus non earum deleniti aliquam
                </p>
              </div>
            </div>
            {/* card ends here */}
          </div>
          {/* col ends here */}
          <div className="col-12 col-sm-6 col-md-3 m-auto">
            {/* card starts here */}
            <div className="card shadow">
              <img src="images/app.svg" alt="" className="card-img-top" />
              <div className="card-body">
                <h3 className="text-center">App Development</h3>
                <hr className="mx-auto w-75" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  eligendi soluta est veniam sequi nemo, quas delectus eveniet
                  ducimus rem animi. Natus non earum deleniti aliquam
                </p>
              </div>
            </div>
            {/* card ends here */}
          </div>
          {/* col ends here */}
          <div className="col-12 col-sm-6 col-md-3 m-auto">
            {/* card starts here */}
            <div className="card shadow">
              <img src="images/dm.svg" alt="" className="card-img-top" />
              <div className="card-body">
                <h3 className="text-center">Digital Marketing</h3>
                <hr className="mx-auto w-75" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  eligendi soluta est veniam sequi nemo, quas delectus eveniet
                  ducimus rem animi. Natus non earum deleniti aliquam
                </p>
              </div>
            </div>
            {/* card ends here */}
          </div>
          {/* col ends here */}
          <div className="col-12 col-sm-6 col-md-3 m-auto">
            {/* card starts here */}
            <div className="card shadow">
              <img src="images/seo.svg" alt="" className="card-img-top" />
              <div className="card-body">
                <h3 className="text-center">Email Marketing</h3>
                <hr className="mx-auto w-75" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  eligendi soluta est veniam sequi nemo, quas delectus eveniet
                  ducimus rem animi. Natus non earum deleniti aliquam
                </p>
              </div>
            </div>
            {/* card ends here */}
          </div>
          {/* col ends here */}
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
