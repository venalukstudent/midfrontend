const MasterHead = () => {
  return (
    <nav>
      <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          <img
            className="masthead-avatar mb-5"
            src="/img/avataaars.svg"
            alt="..."
          />
          <h1 className="masthead-heading text-uppercase mb-0">
            Venalveol Manampiring
          </h1>
          <div className="divider-custom divider-light">
            <div className="divider-custom-line" />
            <div className="divider-custom-icon">
              <i className="fas fa-star" />
            </div>
            <div className="divider-custom-line" />
          </div>
          <p className="masthead-subheading font-weight-light mb-0">
            Beginner JavaScript, HTML, CSS <br />
            beginner Python &amp; C# <br />
            Advanced in After effect, Premiere, Alight motion <br />
            Photographer
          </p>
        </div>
      </header>
    </nav>
  );
};

export default MasterHead;
