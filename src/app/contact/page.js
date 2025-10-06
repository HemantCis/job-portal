import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function ContactUs() {
  return (
    <>
    <Header />
        <main>
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center mini-hero jobs-hero">
        <div className="hero-overlay"></div>
        <div className="inner-container hero-content text-center px-3 px-md-0">
          <h1 className="fw-bold mb-3 text-70">Contact Us</h1>
          <p className="mb-md-5 mb-4 pb-lg-3 text-20 fw-light max-w-mobile">
            We can help serve you better, please complete the form below. <br />
            Please note, due to the volume of inquiries, we cannot respond to everyone. Where we can, we will respond as soon as possible.
          </p>
          <div className="d-flex flex-column align-items-center flex-sm-row justify-content-center gap-3">
            <a href="#" className="btn btn-danger px-4 py-2 fw-semibold text-uppercase">
              Upload Resume
            </a>
            <a href="#" className="btn btn-outline-danger bg-white px-4 py-2 fw-semibold text-uppercase">
              Join Our Team
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section py-5">
        <div className="small-container">
          <form className="contact-form pt-lg-4 pb-lg-3">
            <div className="row m-0 p-0">
              {/* About You */}
              <div className="col-md-6">
                <p className="fw-bold color-yellow mb-1">GET IN TOUCH</p>
                <h2 className="heading-1 mb-3">About You</h2>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label mb-1">
                    Full Name
                  </label>
                  <input type="text" className="form-control" id="fullName" placeholder="John Parker" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label mb-1">
                    Email Address
                  </label>
                  <input type="email" className="form-control" id="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="form-label mb-1">
                    Phone Number
                  </label>
                  <input type="tel" className="form-control" id="phone" placeholder="+91 9876543210" />
                </div>
              </div>

              <hr className="my-5 text-muted" />

              {/* About Business */}
              <div className="col-md-6">
                <h2 className="heading-1 mb-3">About Your Business</h2>
              </div>
              <div className="col-md-6">
                <div>
                  <label htmlFor="company" className="form-label mb-1">
                    Company Name
                  </label>
                  <input type="text" className="form-control" id="company" placeholder="Acme Corp" />
                </div>
              </div>

              <hr className="my-5 text-muted" />

              {/* Message */}
              <div className="col-md-6">
                <h2 className="heading-1 mb-3">Your Message</h2>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="reason" className="form-label mb-1">
                    Reason for Contacting WatuTalent
                  </label>
                  <select defaultValue={"Selectreason"} className="form-select" id="reason">
                    <option value="Selectreason" disabled>
                      Select reason...
                    </option>
                    <option value="hire">Hiring Talent</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="support">Support Request</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label mb-1">
                    Message
                  </label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Type your message here..."></textarea>
                </div>
                <button type="submit" className="btn btn-danger px-5">
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
