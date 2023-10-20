import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      {/* ======= Header ======= */}
      <Header />
      {/* End Header */}

      {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex align-items-center">
        <div className="container-fluid" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>Bettter Smart Investment Experience With Us</h1>
              <h2>The best investment you can make is in yourself</h2>
              <div>
                <a href="#about" className="btn-get-started scrollto">
                  Get Started
                </a>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-in"
              data-aos-delay={150}
            >
              <img src="#" className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <Services />
      {/* End Services */}

      {/* About */}
      <About />
      {/* End About */}

      {/* ContactUs  */}
      <Contact />
      {/* End ContactUs  */}

      {/* ======= Footer ======= */}
      <Footer />
      {/* End Footer */}
    </>
  );
};

export default Home;
