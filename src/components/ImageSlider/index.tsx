import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./slider.module.scss";

function ImageSlider({ images }: { images: number[] }) {
  const [currentSlide, setCurrentSlide] = useState<NodeJS.Timer>();
  const ref: React.LegacyRef<Slider> = useRef(null);
  const handleSliderHover = () => {
    clearInterval(currentSlide);
    if (window.innerWidth < 1200) return;
    setCurrentSlide(
      setInterval(() => {
        ref.current?.slickNext();
      }, 0)
    );
  };

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          speed: 500,
        },
      },
    ],
  };

  return (
    <div
      className={`image-slider-component ${styles.silder}`}
      onMouseLeave={() => clearInterval(currentSlide)}
      onMouseEnter={handleSliderHover}
    >
      <Slider {...settings} ref={ref}>
        {images?.map((image, i) => (
          <div key={i}>
            <img
              className={styles.image}
              src={`https://the-doors.herokuapp.com/api/files/${image}`}
              alt=""
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
