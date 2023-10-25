import React from "react";

const Contact = () => {
  return (
    <div>
      <section id="contact_section">
        <h1 className="text-center display-3 fw-bold theme-text">
          Contact <span className="text-black">Us</span>
        </h1>
        <hr className="mx-auto w-25" />
        <div className="contact container bg-warning-emphasis bg-gradient p-3 rounded">
          <div id="contact" className="d-flex gap-3 p-md-4 p-2 rounded-5">
            <div className="col-12 col-md-6">
              <h2 className="text-center mt-5 mb-5">Reach Me...!</h2>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Enter the Name
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  className="form-control"
                  placeholder="Ex: Mohammed Infas"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  autoComplete="off"
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Subject
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  className="form-control"
                  placeholder="Enter the Subject"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Your Message
                </label>
                <textarea
                  autoComplete="off"
                  className="form-control"
                  rows="3"
                  placeholder="Your Message...."
                ></textarea>
              </div>

              <button
                type="submit"
                className="signup shadow-lg w-50 rounded-5 text-center p-3"
              >
                Send Message<i class="bi bi-arrow-up-right p-3"></i>
              </button>
            </div>
            <div className="col-12 col-md-6">
              <img src="assets/img/contact.svg" alt="contact" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
