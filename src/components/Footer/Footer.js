import { FaInstagram, FaGithub } from "react-icons/fa";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Footer = () => {
  const [Contact, setContact] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    const ContactRef = ref(db, "Contact");

    setLoading(true);
    onValue(ContactRef, (snapshot) => {
      const data = snapshot.val();
      setContact(data);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      {/* Footer */}
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            {/* Footer Location */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Location</h4>
              <p className="lead mb-0">{Contact.address}</p>
            </div>
            {/* Footer Social Icons */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">My Social Media</h4>
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://www.instagram.com/venal__"
                title="Instagram"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://github.com/venalukstudent"
                title="GitHub"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
            {/* Footer About Text */}
            <div className="col-lg-4">
              <h4 className="text-uppercase mb-4">Telephone</h4>
              <p className="lead mb-0">{Contact.telephone}</p>
              <br />
              <h4 className="text-uppercase mb-4">Email</h4>
              <p className="lead mb-0">{Contact.email}</p>
            </div>
          </div>
        </div>
      </footer>
      {/* Copyright Section */}
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright © Your Website 2024</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
