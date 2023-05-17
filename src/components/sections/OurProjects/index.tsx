import Title from "../../Title";
import styles from "./projects.module.scss";
import image1 from "/public/media/m1.jpg";
import image2 from "/public/media/m5.jpg";
import image3 from "/public/media/t1.jpg";
import image4 from "/public/media/t2.jpg";
import image5 from "/public/media/m3.jpg";
import image6 from "/public/media/c2.jpg";
import image7 from "/public/media/m4.jpg";
import image8 from "/public/media/m2.jpg";
import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "./Image";
import useIntersectionObserver from "@/utils/InterSectionObserver";
import useIntl from "react-intl/src/components/useIntl";

const images = [
  image1.src,
  image2.src,
  image3.src,
  image4.src,
  image5.src,
  image6.src,
  image7.src,
  image8.src,
];

function OurProjects() {
  const ref = useRef(null);
  const entity = useIntersectionObserver(ref, { rootMargin: "-100px 0px" });
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

    autoplay: true,
    autoplaySpeed: 4000,

    className: styles.slider,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
	const intl = useIntl();
	const t = (id: string) => {
		return intl?.formatMessage({ id: id });
	};
  return (
    <div
      className={`${entity?.isIntersecting && styles.active} ${
        styles.projects
      }`}
      ref={ref}
    >
      <Title>{t("projects")}</Title>
      <div className={styles.images}>
        <div className={styles.row}>
          <Image src={image1.src} />
          <Image src={image2.src} />
        </div>
        <div className={styles.row}>
          {" "}
          <Image src={image3.src} />
          <Image src={image4.src} />
        </div>
        <div className={styles.row}>
          {" "}
          <Image src={image5.src} />
          <Image src={image6.src} />
        </div>
        <div className={styles.row}>
          {" "}
          <Image src={image7.src} />
          <Image src={image8.src} />
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <Image src={image1.src} style={{ transition: ".3s" }} />
        </div>
        <div>
          <Image src={image2.src} style={{ transition: ".3s" }} />
        </div>
        <div>
          <Image src={image3.src} style={{ transition: ".3s" }} />
        </div>
        <div>
          <Image src={image4.src} style={{ transition: ".3s" }} />
        </div>
        <div>
          <Image src={image5.src} style={{ transition: ".3s" }} />
        </div>
        <div>
          <Image src={image6.src} style={{ transition: ".3s" }} />
        </div>
        <div>
          <Image src={image7.src} style={{ transition: ".3s" }} />
        </div>
        <div>
          <Image src={image8.src} style={{ transition: ".3s" }} />
        </div>
      </Slider>
    </div>
  );
}

export default OurProjects;
