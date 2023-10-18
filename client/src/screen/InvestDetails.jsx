import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Services from "./Services";

const InvestDetail = () => {
  return (
    <>
      <Header />
      <section>
        <div className="container">
          <div className="invest_details d-flex row mt-4">
            <div className="col-md-8 mt-5">
              {/* <span className="border border-primary border-5"> */}
              <h1 className="mb-4">Which type of investment</h1>
              {/* </span> */}
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                natus necessitatibus vero quos laborum facere explicabo aliquid
                tenetur nihil totam! Iste illo suscipit officia similique hic
                corporis obcaecati aut repudiandae.
              </p>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                natus necessitatibus vero quos laborum facere explicabo aliquid
                tenetur nihil totam! Iste illo suscipit officia similique hic
                corporis obcaecati aut repudiandae.
              </p>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                natus necessitatibus vero quos laborum facere explicabo aliquid
                tenetur nihil totam! Iste illo suscipit officia similique hic
                corporis obcaecati aut repudiandae.
              </p>
              <button
                type="submit"
                className="invest_btn shadow-lg px-4 py-2 rounded-5 text-center bg-secondary"
              >
                Invest
              </button>
            </div>
            <div className="col-md-4">
              <img
                src="assets/img/testimonials/testimonials-4.jpg"
                alt="invest"
                className="invest_img"
              />
            </div>
          </div>
          {/* <span className="border border-primary border-5"></span> */}
        </div>

        <div className="container related_services">
          <h4>Related Services</h4>
          <hr className="mb-5 border-5" />
          <div className="row mb-5 row-gap-3">
            <div className="col-12 col-sm-6 col-lg-3 m-auto">
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
                  <button
                    type="submit"
                    className="signup shadow-lg w-50 rounded-5 text-center bg-secondary"
                  >
                    Invest
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 m-auto">
              {/* card starts here */}
              <div className="card shadow">
                <img
                  src="assets/img/about.jpg"
                  alt=""
                  className="card-img-top"
                />
                <div className="card-body">
                  <h3 className="text-center">Web Development</h3>
                  <hr className="mx-auto w-75" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    eligendi soluta est veniam sequi nemo, quas delectus eveniet
                    ducimus rem animi. Natus non earum deleniti aliquam
                  </p>
                  <button
                    type="submit"
                    className="signup shadow-lg w-50 rounded-5 text-center bg-secondary"
                  >
                    Invest
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 m-auto">
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
                  <button
                    type="submit"
                    className="signup shadow-lg w-50 rounded-5 text-center bg-secondary"
                  >
                    Invest
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 m-auto">
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
                  <button
                    type="submit"
                    className="signup shadow-lg w-50 rounded-5 text-center bg-secondary"
                  >
                    Invest
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default InvestDetail;
