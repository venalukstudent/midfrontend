const Modal = () => {
  return (
    <div>
      {/* Portfolio Modal 1*/}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal1"
        tabIndex={-1}
        aria-labelledby="portfolioModal1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* Portfolio Modal - Title*/}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                      Kami Hadir Bem2024
                    </h2>
                    {/* Icon Divider*/}
                    <div className="divider-custom">
                      <div className="divider-custom-line" />
                      <div className="divider-custom-icon">
                        <i className="fas fa-star" />
                      </div>
                      <div className="divider-custom-line" />
                    </div>
                    {/* Portfolio Modal - Image*/}
                    <img
                      className="img-fluid rounded mb-5"
                      src="/img/portfolio/1.jpg"
                      alt="..."
                    />
                    {/* Portfolio Modal - Text*/}
                    <p className="mb-4">
                      after effect
                      <br />
                      3d tracking
                      <br />
                      time remapping
                      <br />
                      cinematography
                    </p>
                    <button className="btn btn-primary" data-bs-dismiss="modal">
                      <i className="fas fa-xmark fa-fw" />
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio Modal 2*/}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal2"
        tabIndex={-1}
        aria-labelledby="portfolioModal2"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* Portfolio Modal - Title*/}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                      Booking Room Crystal Dorm
                    </h2>
                    {/* Icon Divider*/}
                    <div className="divider-custom">
                      <div className="divider-custom-line" />
                      <div className="divider-custom-icon">
                        <i className="fas fa-star" />
                      </div>
                      <div className="divider-custom-line" />
                    </div>
                    {/* Portfolio Modal - Image*/}
                    <img
                      className="img-fluid rounded mb-5"
                      src="/img/portfolio/2.jpg"
                      alt="..."
                    />
                    {/* Portfolio Modal - Text*/}
                    <p className="mb-4">
                      Visual studio is the software used to create this
                      application, then here we use c# to create programs in
                      this application. xampp is the software to create a
                      database for the crystal dormitory data that we will
                      store, and mysql is the means to connect the database to
                      this application.
                    </p>
                    <button className="btn btn-primary" data-bs-dismiss="modal">
                      <i className="fas fa-xmark fa-fw" />
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio Modal 3*/}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal3"
        tabIndex={-1}
        aria-labelledby="portfolioModal3"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* Portfolio Modal - Title*/}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                      Become a Photographer in wedding
                    </h2>
                    {/* Icon Divider*/}
                    <div className="divider-custom">
                      <div className="divider-custom-line" />
                      <div className="divider-custom-icon">
                        <i className="fas fa-star" />
                      </div>
                      <div className="divider-custom-line" />
                    </div>
                    {/* Portfolio Modal - Image*/}
                    <img
                      className="img-fluid rounded mb-5"
                      src="/img/portfolio/4.jpg"
                      alt="..."
                    />
                    {/* Portfolio Modal - Text*/}
                    <p className="mb-4">
                      For rent to be a photographer at a wedding event.
                    </p>
                    <button className="btn btn-primary" data-bs-dismiss="modal">
                      <i className="fas fa-xmark fa-fw" />
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
