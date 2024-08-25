import React, { useRef } from "react";
import styles from "./testimonials.module.css";
import Logos from "../Logos";

const Testimonials = () => {
  // funtion that slide the testimonials

  const slider = useRef();
  let tX = 0;
  const nextSlide = () => {
    if (tX > -75) {
      tX -= 25;
    }
    slider.current.style.transform = `translateX(${tX}%)`;
  };

  const backSlide = () => {
    if (tX < 25) {
      tX += 25;
    }
    slider.current.style.transform = `translateX(${tX}%)`;
  };

  return (
    <div className={styles.testimonials} id="testimonial">
      <div className={styles.btn}>
        <button>
          <img
            src={Logos.next_button}
            className={styles.back}
            onClick={nextSlide}
            alt=""
          />
        </button>
        <button>
          <img
            src={Logos.back_button}
            className={styles.next}
            onClick={backSlide}
            alt=""
          />
        </button>
      </div>
      {/* <img src={Logos.fault} alt="" /> */}
      {/* <img src={Logos.images} alt="" /> */}
      <div className={styles.slider}>
        <ul ref={slider}>
          <li>
            <div className={styles.slide}>
              <div className={styles.userInfo}>
                <img src={Logos.eyes} alt="" />
                <div>
                  <h3>Willaims Jacson 1</h3>
                  <span>Lautech, Ogbomoso</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur ipsum delectus necessitatibus velit ab? Nam, nemo
                velit voluptatibus, atque esse facere maxime libero, quidem
                deserunt recusandae ullam? Tempore, beatae aliquam?
              </p>
            </div>
          </li>
          <li>
            <div className={styles.slide}>
              <div className={styles.userInfo}>
                <img src={Logos.fault} alt="" />
                <div>
                  <h3>Willaims Jacson 2</h3>
                  <span>Lautech, Ogbomoso</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur ipsum delectus necessitatibus velit ab? Nam, nemo
                velit voluptatibus, atque esse facere maxime libero, quidem
                deserunt recusandae ullam? Tempore, beatae aliquam?
              </p>
            </div>
          </li>
          <li>
            <div className={styles.slide}>
              <div className={styles.userInfo}>
                <img src={Logos.eyes} alt="" />
                <div>
                  <h3>Willaims Jacson 3</h3>
                  <span>Lautech, Ogbomoso</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur ipsum delectus necessitatibus velit ab? Nam, nemo
                velit voluptatibus, atque esse facere maxime libero, quidem
                deserunt recusandae ullam? Tempore, beatae aliquam?
              </p>
            </div>
          </li>
          <li>
            <div className={styles.slide}>
              <div className={styles.userInfo}>
                <img src={Logos.eyes} alt="" />
                <div>
                  <h3>Willaims Jacson 4</h3>
                  <span>Lautech, Ogbomoso</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur ipsum delectus necessitatibus velit ab? Nam, nemo
                velit voluptatibus, atque esse facere maxime libero, quidem
                deserunt recusandae ullam? Tempore, beatae aliquam?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
