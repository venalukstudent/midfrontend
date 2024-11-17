import { FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            {/* Footer Location */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Location</h4>
              <p className="lead mb-0">
                Jl. Arnold Mononutu, Airmadidi Bawah, Kec. Airmadidi, Kabupaten
                Minahasa Utara, Sulawesi Utara 95371 Universitas Klabat, Alamat
              </p>
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
              <p className="lead mb-0">+62 853-4043-3849</p>
              <br />
              <h4 className="text-uppercase mb-4">Email</h4>
              <p className="lead mb-0">s22310263@student.unklab.ac.id</p>
            </div>
          </div>
        </div>
      </footer>
      {/* Copyright Section */}
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright © Your Website 2023</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
