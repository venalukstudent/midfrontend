import { useState } from "react";
// Coba impor absolut
import { db } from "../../config/Firebase";
// Atau periksa eksistensi file // Import the Firebase Realtime Database instance
import { ref, push } from "firebase/database";

const Contact = () => {
  const formInitialDetails = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const contactRef = ref(db, "contacts"); // Create a reference to the "contacts" node in the Realtime Database

    try {
      await push(contactRef, formDetails); // Push the form data to the "contacts" node

      setStatus({ success: true, message: "Message sent successfully!" });
      setFormDetails(formInitialDetails);
    } catch (error) {
      setStatus({
        success: false,
        message: "Failed to send message. Try again!",
      });
    }

    setButtonText("Send");
  };

  return (
    <div>
      {/* Contact Section*/}
      <section className="page-section" id="contact">
        <div className="container">
          {/* Contact Section Heading*/}
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Contact Me
          </h2>
          {/* Icon Divider*/}
          <div className="divider-custom">
            <div className="divider-custom-line" />
            <div className="divider-custom-icon">
              <i className="fas fa-star" />
            </div>
            <div className="divider-custom-line" />
          </div>
          {/* Contact Section Form*/}
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
              <form id="contactForm" onSubmit={handleSubmit}>
                {/* Name input*/}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter your name..."
                    value={formDetails.name}
                    onChange={(e) => onFormUpdate("name", e.target.value)}
                    required
                  />
                  <label htmlFor="name">Full name</label>
                </div>
                {/* Email address input*/}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={formDetails.email}
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                    required
                  />
                  <label htmlFor="email">Email address</label>
                </div>
                {/* Phone number input*/}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    value={formDetails.phone}
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                    required
                  />
                  <label htmlFor="phone">Phone number</label>
                </div>
                {/* Message input*/}
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Enter your message here..."
                    style={{ height: "10rem" }}
                    value={formDetails.message}
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    required
                  />
                  <label htmlFor="message">Message</label>
                </div>
                {/* Submit Button*/}
                <button
                  className="btn btn-primary btn-xl"
                  id="submitButton"
                  type="submit"
                >
                  {buttonText}
                </button>
                {/* Status Message */}
                {status.message && (
                  <div
                    className={`status-message ${
                      status.success ? "success" : "error"
                    }`}
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
