import Footer from "../components/Footer";
import Header from "../components/Header";

const Contact = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* End Header */}
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="bg-warning-emphasis bg-gradient p-3 rounded w-25">
          <h2 className="text-center">Login</h2>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
