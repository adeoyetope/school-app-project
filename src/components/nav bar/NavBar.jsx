import React, { useEffect, useState } from "react";
import Logos from "../Logos";
import styles from "./navBar.module.css";

import { Link } from "react-scroll";
// nav(wite) and dark style of navigation
const nav = {
  width: "100%",

  color: "#fff",
  display: "flex",
  justifyContent: "space-between",
  position: "fixed",
};
const dark = {
  width: "100%",

  color: "black",
  display: "flex",
  justifyContent: "space-between",
  position: "fixed",
};

const NavBar = () => {
  // state that control navigations into white or black
  const [sticky, setSticky] = useState(true);
  // useEffect hook that control window scrolling by Y axis to control the navigations
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setSticky(false) : setSticky(true);
    });
  }, []);

  const style = "nav";

  return (
    <nav style={sticky ? nav : dark}>
      <img src={Logos.lautech} alt="" />
      {/* /* install react scroll "npm install raect-scroll" */}
      {/* the offset value is to create up on each page */}

      <ul>
        <li>
          {" "}
          <Link to="hero" smooth={true} offset={50} duration={500}>
            HOME
          </Link>
        </li>
        <li>
          {" "}
          <Link to="about" smooth={true} offset={-100} duration={500}>
            ABOUT
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="program" smooth={true} offset={-200} duration={500}>
            PROGRAM
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="campus" smooth={true} offset={-100} duration={500}>
            {" "}
            CAMPUS
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="testimonial" smooth={true} offset={-200} duration={500}>
            Testimonials
          </Link>{" "}
        </li>{" "}
        <li>
          <button className={styles.contact_btn}>
            {" "}
            <Link to="content" smooth={true} offset={0} duration={500}>
              CONTACT US
            </Link>{" "}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
