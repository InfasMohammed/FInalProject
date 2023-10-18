import Footer from "../components/Footer";
import Header from "../components/Header";

const Contact = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* End Header */}
      <section id="footer">
        <div className="contact container bg-warning-emphasis bg-gradient p-3 rounded">
          <div className="d-flex  gap-3">
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
            <div className="col-12 col-md-6 contact_side"></div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
