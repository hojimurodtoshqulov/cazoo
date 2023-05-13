import styles from "./hero.module.scss";
import React, { useRef, useEffect, useState } from "react";
import hero1 from "../../../../public/media/t1.jpg";
import hero2 from "../../../../public/media/m3.jpg";
import hero3 from "../../../../public/media/tirePng.png";
import useIntersectionObserver from "@/utils/InterSectionObserver";
import { ProductType } from "@/shared/types";
import { API_URL } from "@/shared/constants";
import axios from "axios";
import useIntl from "react-intl/src/components/useIntl";
import ShowcaseFilter from "@/components/ShowcaseFilter";
import { useCarsData } from "@/hooks/useCarsData";
import { useContext } from "react";
import CarDataProvider, { CarsContext } from "@/context/CarContext";

function Showcase() {
  const ref = useRef(null);
  const entity = useIntersectionObserver(ref, {});
  const [products, setProducts] = useState<ProductType[]>([]);
  const [productImages, setProductImages] = useState<ProductType[]>([]);
 
  const intl = useIntl();
  const t = (id: string) => {
    return intl.formatMessage({ id: id });
  };
  useEffect(() => {
    // axios.get(`${API_URL}/api/show-case/1`).then((res) => {
    //   setProducts(res?.data);
    //   setProductImages(res?.data?.attachmentContentIds);
    // });
  
  }, []);
  console.log("Showcase products >->-> ", productImages[0]);
  return (
    <div
      className={`${entity?.isIntersecting && styles.active} ${
        styles.showcase
      }`}
      ref={ref}
    >
      <div className={styles.text}>
        <h1>
          {/* {products?.titleRu} */}
          CAR MARKET BONUS
        </h1>
        <p>
          <span>
            Our customers save over £600* on average when buying a car
          </span>
          <br />
          Great value used cars for every budget.
        </p>
        {/* {t("showcase.desc2")} */}
        <ShowcaseFilter title={<></>} paragraph="" />
      </div>
      <div className={styles.images}>
        <div className={styles.ovals}>
          <div className={`${styles.image} ${styles.image1}`}>
            <img src={hero1.src} alt="" />
          </div>
          <div className={styles.line}></div>{" "}
          <div className={`${styles.image} ${styles.image2}`}>
            <img src={hero2.src} alt="" />
          </div>
        </div>
        <img className={styles.image3} src={hero3.src} alt="" />
      </div>
    </div>
  );
}
export default Showcase;
