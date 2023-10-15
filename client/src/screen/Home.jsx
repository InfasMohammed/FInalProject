import React from 'react'
import ".."
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
  {/* ======= Header ======= */}
  <Header/>
  {/* End Header */}

  {/* ======= Hero Section ======= */}
  <section id="hero" className="d-flex align-items-center">
    <div className="container-fluid" data-aos="fade-up">
      <div className="row justify-content-center">
        <div className="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1>Bettter Smart Investment Experience With Us</h1>
          <h2>
            The best investment you can make is in yourself
          </h2>
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
          <img
            src="assets/img/hero-img.png"
            className="img-fluid animated"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  {/* End Hero */}
  <main id="main">
    
    {/* ======= Contact Section ======= */}
    <section id="contact" className="contact section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
          <p>
            Call us on week days at 09:00 AM to 10:00 PM
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="info-box mb-4">
              <i className="bx bx-map" />
              <h3>Our Address</h3>
              <p>Ampara Road, Sammanthurai</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-envelope" />
              <h3>Email Us</h3>
              <p>info@raizmotors.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-phone-call" />
              <h3>Call Us</h3>
              <p>+94 672260274</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Contact Section */}
  </main>
  {/* End #main */}
  
  {/* ======= Footer ======= */}
  <Footer/>
  {/* End Footer */}
</>
  )
}

export default Home;