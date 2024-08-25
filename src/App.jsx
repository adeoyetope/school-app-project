import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/nav bar/NavBar";
import Hero from "./components/hero/Hero";
import Program from "./components/programs/Program";
import Title from "./components/folderTitle/Title";
import About from "./components/about/About";
import Campus from "./components/campus/Campus";
import Testimonials from "./components/testimonials/Testimonials";
import Content from "./components/content/Content";

import Modal from "./components/modal/Modal";

const App = () => {
  // state that control show modal
  const [showModal, setShowModal] = useState(false);

  // state that control playing of video
  const [play, setPlay] = useState(false);

  const handleModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      <NavBar />
      <Hero setShowModal={setShowModal} />

      <Title subtitle="Our Programs" title="what we offer" />
      <Program />
      <About play={play} setPlay={setPlay} />
      <Title subtitle="gallery" title="campus photo" />
      <Campus />
      <div>
        <Title subtitle="Testimonials" title="what student says" />
        <Testimonials />
        <Title subtitle="Contact us" title="Get in Touch" />
        <Content />

        <div className="loader">
          <hr className="hr" />
        </div>
        {showModal ? (
          <Modal setShowModal={setShowModal} play={play} setPlay={setPlay} />
        ) : null}
      </div>
    </div>
  );
};

export default App;
