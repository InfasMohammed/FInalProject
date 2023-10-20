import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container-fluid pt-4" id="footer">
        {/* <div className="d-flex"> */}
        <div className="row">
          <div className="col-md-4">
            <img src="assets/img/raiz-motors-logo.png" alt="logo" />
          </div>
          <div className="col-md-4">
            <h6 className="des">
              <strong>Phone:</strong> +94 672260274
            </h6>
            <h6 className="des">
              <strong>Email:</strong> info@raizmotors.com
            </h6>
            <h6 className="des">Ampara Road,</h6>
            <h6 className="des">Sammanthurai</h6>
            <h6 className="des">Sri Lanka</h6>
          </div>
          <div className="col-md-4">
            <h6>Get in Touch</h6>
            <div className="d-flex">
              <div className="row">
                <div className="col">
                  <i className="bi bi-facebook fs-3"></i>
                </div>
                <div className="col">
                  <i className="bi bi-instagram fs-3"></i>
                </div>
                <div className="col">
                  <i className="bi bi-pinterest fs-3"></i>
                </div>
                <div className="col">
                  <i className="bi bi-linkedin fs-3"></i>
                </div>
                <div className="col">
                  <i className="bi bi-whatsapp fs-3"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          &copy; 2023 Raiz Motors ||{" "}
          <a
            href="https://github.com/InfasMohammed"
            target="_blank"
            className="text-white"
          >
            Developed by Mohammed Infas
          </a>
        </div>
      </div>

      {/* </div> */}
    </>
  );
};

export default Footer;
