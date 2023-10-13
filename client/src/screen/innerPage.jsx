const InnerPage=()=> {
      return (
        <div>
          <meta charSet="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <title>Inner Page - Techie Bootstrap Template</title>
          <meta content name="description" />
          <meta content name="keywords" />
          {/* Favicons */}
          <link href="assets/img/favicon.png" rel="icon" />
          <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
          {/* Google Fonts */}
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
          {/* Vendor CSS Files */}
          <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
          <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
          <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
          <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
          <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
          <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
          {/* Template Main CSS File */}
          <link href="assets/css/style.css" rel="stylesheet" />
          {/* =======================================================
    * Template Name: Techie
    * Updated: May 30 2023 with Bootstrap v5.3.0
    * Template URL: https://bootstrapmade.com/techie-free-skin-bootstrap-3/
    * Author: BootstrapMade.com
    * License: https://bootstrapmade.com/license/
    ======================================================== */}
          {/* ======= Header ======= */}
          <header id="header" className="fixed-top header-inner-pages">
            <div className="container d-flex align-items-center justify-content-between">
              <h1 className="logo"><a href="index.html">Techie</a></h1>
              {/* Uncomment below if you prefer to use an image logo */}
              {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
              <nav id="navbar" className="navbar">
                <ul>
                  <li><a className="nav-link scrollto " href="#hero">Home</a></li>
                  <li><a className="nav-link scrollto" href="#about">About</a></li>
                  <li><a className="nav-link scrollto" href="#services">Services</a></li>
                  <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                  <li><a className="nav-link scrollto" href="#team">Team</a></li>
                  <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down" /></a>
                    <ul>
                      <li><a href="#">Drop Down 1</a></li>
                      <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
                        <ul>
                          <li><a href="#">Deep Drop Down 1</a></li>
                          <li><a href="#">Deep Drop Down 2</a></li>
                          <li><a href="#">Deep Drop Down 3</a></li>
                          <li><a href="#">Deep Drop Down 4</a></li>
                          <li><a href="#">Deep Drop Down 5</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Drop Down 2</a></li>
                      <li><a href="#">Drop Down 3</a></li>
                      <li><a href="#">Drop Down 4</a></li>
                    </ul>
                  </li>
                  <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                  <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle" />
              </nav>{/* .navbar */}
            </div>
          </header>{/* End Header */}
          <main id="main">
            {/* ======= Breadcrumbs ======= */}
            <section className="breadcrumbs">
              <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                  <h2>Inner Page</h2>
                  <ol>
                    <li><a href="index.html">Home</a></li>
                    <li>Inner Page</li>
                  </ol>
                </div>
              </div>
            </section>{/* End Breadcrumbs */}
            <section className="inner-page">
              <div className="container">
                <p>
                  Example inner page template
                </p>
              </div>
            </section>
          </main>{/* End #main */}
          {/* ======= Footer ======= */}
          <footer id="footer">
            <div className="footer-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-6 footer-contact">
                    <h3>Techie</h3>
                    <p>
                      A108 Adam Street <br />
                      New York, NY 535022<br />
                      United States <br /><br />
                      <strong>Phone:</strong> +1 5589 55488 55<br />
                      <strong>Email:</strong> info@example.com<br />
                    </p>
                  </div>
                  <div className="col-lg-2 col-md-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                      <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
                      <li><i className="bx bx-chevron-right" /> <a href="#">About us</a></li>
                      <li><i className="bx bx-chevron-right" /> <a href="#">Services</a></li>
                      <li><i className="bx bx-chevron-right" /> <a href="#">Terms of service</a></li>
                      <li><i className="bx bx-chevron-right" /> <a href="#">Privacy policy</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Our Services</h4>
                    <ul>
                      <li><i className="bx bx-chevron-right" /> <a href="#">Web Design</a></li>
                      <li><i className="bx bx-chevron-right" /> <a href="#">Web Development</a></li>
                      <li><i className="bx bx-chevron-right" /> <a href="#">Product Management</a></li>
                      <li><i className="bx bx-chevron-right" /> <a href="#">Marketing</a></li>
                      <li><i className="bx bx-chevron-right" /> <a href="#">Graphic Design</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-4 col-md-6 footer-newsletter">
                    <h4>Join Our Newsletter</h4>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                    <form action method="post">
                      <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="copyright-wrap d-md-flex py-4">
                <div className="me-md-auto text-center text-md-start">
                  <div className="copyright">
                    © Copyright <strong><span>Techie</span></strong>. All Rights Reserved
                  </div>
                  <div className="credits">
                    {/* All the links in the footer should remain intact. */}
                    {/* You can delete the links only if you purchased the pro version. */}
                    {/* Licensing information: https://bootstrapmade.com/license/ */}
                    {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/techie-free-skin-bootstrap-3/ */}
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                  </div>
                </div>
                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                  <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                  <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                  <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                  <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                  <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                </div>
              </div>
            </div>
          </footer>{/* End Footer */}
          <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
          {/* <div id="preloader" /> */}
          {/* Vendor JS Files */}
          {/* Template Main JS File */}
        </div>
      );
}


export default InnerPage;