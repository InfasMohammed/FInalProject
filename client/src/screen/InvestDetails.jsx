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
        
        <h4>Related Investment</h4>
        
        </div>
      </section>
      <Footer />
    </>
  );
};

export default InvestDetail;
