import React from "react";
import Slider from "react-slick";
import styles from "./client.module.scss";
import image from "../../../public/media/hero4.png";
import { GoStar } from "react-icons/go";

type ClientType = {
  id: string;
  description: string;
  name: string;
  job: string;
  image: string;
};

const clients: ClientType[] = [
  {
    id: "1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Luziana Farnandes",
    job: "Web Developer",
    image: image.src,
  },
  {
    id: "2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Luziana Farnandes",
    job: "Web Developer",
    image: image.src,
  },
  {
    id: "3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Luziana Farnandes",
    job: "Web Developer",
    image: image.src,
  },
];

function ClientSlider() {
  const settings = {
    customPaging: function () {
      return (
        <a>
          <button></button>{" "}
        </a>
      );
    },
    dotsClass: "slick-dot",

    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className={`client-slider-component ${styles.slider}`}>
      <Slider {...settings}>
        {clients.map((client: ClientType) => (
          <div key={client.id}>
            <div className={styles.card}>
              <div className={styles.review}>
                <div className={styles.quotes}>
                  <div></div>
                  <div></div>
                </div>
                <div className={styles.stars}>
                  <GoStar color="#FFB400" />
                  <GoStar color="#FFB400" />
                  <GoStar color="#FFB400" />
                  <GoStar color="#FFB400" />
                  <GoStar color="#FFB400" />
                </div>
              </div>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className={styles.profile}>
                <img src={client.image} alt="" />
                <div>
                  <h1>Luziana Farnandes</h1>
                  <p>Web Developer</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ClientSlider;
