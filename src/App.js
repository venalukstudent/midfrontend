import React, { useEffect } from "react";
import initScripts from "./scripts";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import About from "./components/About/About.js";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";
import Headnav from "./components/Headnav/Headnav.js";
import MasterHead from "./components/MasterHead/MasterHead.js";
import Modal from "./components/Modal/Modal.js";
import Portofolio from "./components/Portofolio/Portofolio.js";

const App = () => {
  useEffect(() => {
    initScripts();
  }, []);
  return (
    <div className="body-wrap">
      <Headnav />
      <MasterHead />
      <Portofolio />
      <About />
      <Contact />
      <Footer />
      <Modal />
    </div>
  );
};

export default App;
