import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollSpy from "bootstrap/js/dist/scrollspy";

const Headnav = () => {
  useEffect(() => {
    // Fungsi untuk mengecilkan navbar saat scroll
    const navbarShrink = () => {
      const mainNav = document.body.querySelector("#mainNav");
      if (!mainNav) return;
      if (window.scrollY === 0) {
        mainNav.classList.remove("navbar-shrink");
      } else {
        mainNav.classList.add("navbar-shrink");
      }
    };

    // Tambahkan event listener untuk scroll
    window.addEventListener("scroll", navbarShrink);

    // Aktifkan Bootstrap ScrollSpy
    const mainNav = document.body.querySelector("#mainNav");
    if (mainNav) {
      new ScrollSpy(document.body, {
        target: "#mainNav",
        rootMargin: "0px 0px -40%",
      });
    }

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", navbarShrink);
    };
  }, []); // Empty dependency array karena hanya perlu dijalankan sekali

  return (
    <nav
      className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand" href="#page-top">
          Hello Everyone
        </a>
        <button
          className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded"
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">
                About
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Headnav;
