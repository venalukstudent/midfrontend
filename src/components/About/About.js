import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner"; // Mengimpor Circles dari react-loader-spinner

const About = () => {
  const [About, setAbout] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getDatabase();
    const AboutRef = ref(db, "About");

    setLoading(true);
    onValue(AboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      {/* About Section*/}
      <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
          {/* About Section Heading*/}
          <h2 className="page-section-heading text-center text-uppercase text-white">
            About Me
          </h2>
          {/* Icon Divider*/}
          <div className="divider-custom divider-light">
            <div className="divider-custom-line" />
            <div className="divider-custom-icon">
              <i className="fas fa-star" />
            </div>
            <div className="divider-custom-line" />
          </div>
          {/* Loading Indicator */}
          {loading ? (
            <div className="loader-container">
              <Circles color="#00BFFF" height={80} width={80} />
            </div>
          ) : (
            <div className="row">
              <div className="col-lg-4 ms-auto">
                <p className="lead">{About.p1}</p>
              </div>
              <div className="col-lg-4 me-auto">
                <p className="lead">{About.p2}</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default About;
