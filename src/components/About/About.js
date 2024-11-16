const About = () => {
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
          {/* About Section Content*/}
          <div className="row">
            <div className="col-lg-4 ms-auto">
              <p className="lead">
                My name is venal born in timika, now i'm 18 years old and
                studying to be a programmer. i was elementary school at advent
                kolongan elementary school, then middle school at advent 1
                tikala manado middle school, and high school at advent klabat
                manado high school, and now i'm studying at klabat university
                with a major in informatics.
              </p>
            </div>
            <div className="col-lg-4 me-auto">
              <p className="lead">
                In this 3rd semester, I learned a lot about programming such as
                creating applications with c#, creating webs with html, css and
                javascript and then connecting them through react and firebase.
                and also github which makes coding more efficient.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
