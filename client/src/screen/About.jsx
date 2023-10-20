import React from "react";

const About = () => {
  return (
    <>
      <div className="about_container">
        <div className="container">
        <h1 className="text-center mt-5 display-3 fw-bold text-white">
          About <span className="text-black">Us</span>
        </h1>
        <hr className="mx-auto mb-5 w-25" />
        <div className="about mb-md-4 mb-2 p-md-4 p-2 rounded-5">
          <div className="row mb-4">
            <div className="col-md-8 col-12">
              <h3>About Rais Motors</h3>
              <p className="p-md-3 p-1">
                At Rais Motors, we are passionate about financial empowerment
                and business growth. Our mission is to provide individuals and
                businesses with the means to achieve their financial aspirations
                through intelligent investments. As a part of our commitment to
                this mission, we proudly present our flagship
                product, "Smart Invest."
              </p>
            </div>
            <div className="col-md-4 col-12">
              <img
                className="rounded-5"
                src="assets/img/about.jpg"
                alt="Raiz Motors"
              />
            </div>
          </div>
        </div>
        <div className="about mb-md-4 mb-2 p-md-4 p-2 rounded-5">
          <div className="row mb-4">
            <div className="col-md-4 col-12">
              <img
                src="assets/img/mission.png"
                alt="Mission"
              />
            </div>
            <div className="col-md-8 col-12">
              <h3>Our Mission</h3>
              <p className="p-md-3 p-1">
                Rais Motors was born from a vision of a future where financial
                growth is accessible to everyone. We recognize that smart
                investments are the cornerstone of financial security and
                prosperity. Our mission is to be the catalyst in your journey
                toward financial success and the enhancement of your
                business endeavors.
              </p>
            </div>
          </div>
        </div>
        <div className="about mb-md-4 mb-2 p-md-4 p-2 rounded-5">
          <h3>Trust and Reliability</h3>
          <div className="row mb-4">
            <div className="col-md-8 col-12">
              <p className="p-md-3 p-1">
                Smart Invest is more than just a product; it's your key to
                financial growth. Our investment strategy is built on a
                foundation of experience, research, and a deep understanding of
                the financial markets. With "Smart Invest," we provide you with
                the tools and expertise needed to make your money work for you.
              </p>
            </div>
            <div className="col-md-4 col-12">
              <img
                src="assets/img/trust.png"
                alt="Raiz reliability"
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default About;
