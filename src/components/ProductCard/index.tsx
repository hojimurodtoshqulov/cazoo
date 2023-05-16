// @ts-nocheck

import { MainPropType, ProductType } from "@/shared/types";
import styles from "./card.module.scss";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Button from "../Button";
import CardSlider from "../ImageSlider";
import {Dispatch, memo, SetStateAction, useRef, useState} from "react";
import ImageSlider from "../ImageSlider";
import useIntersectionObserver from "@/utils/InterSectionObserver";
import useIntl from "react-intl/src/components/useIntl";
import Image from "next/image";

function ProductCard({
  product,
  setProduct,
  style,
  setIsModal,
}: MainPropType & {
  product?: ProductType;
  setProduct: Dispatch<SetStateAction<ProductType | undefined>>;
  setIsModal: Dispatch<SetStateAction<boolean>>;
}) {
  const ref = useRef(null);
  const entity = useIntersectionObserver(ref, {});
  const [isLong, setIsLong] = useState<boolean>(false);
  const intl = useIntl();
  const t = (id: string) => {
    return intl?.formatMessage({ id: id });
  };
  console.log("hello 2");
  const priceFormatter = new Intl.NumberFormat("ru-Ru", {
    style: "currency",
    currency: "UZS",
  });
  return (
    <div
      className={`${styles.product} ${entity?.isIntersecting && styles.active}`}
      style={style}
      ref={ref}
      onClick={() => {
        setIsModal(true);
        setProduct(product);
      }}
    >
      {/*<h1>Hello</h1>*/}
      {/* {product?.discount ? (
        <div className={styles.discount}>{product.discount}%</div>
      ) : (
        ""
      )} */}
      {/* {product ? <ImageSlider images={product?.attachmentContentIds} /> : ""} */}
      <div className={styles.imageBox}>
        {product && <img src={`https://10c72c27-767c-4998-967b-2da3e773b024.jprq.live/api/files/${product?.photosIds[0]}`} layout={'fill'} alt=""/>}
      </div>
      {/* <h2>
        <>{product?.maker.name}</>
      </h2> */}
      {/* <h1>
        from <span>{product?.price}</span>${" "}
        {product?.discount ? (
          <span style={{ color: "red", paddingLeft: "10px" }}>
            {Math.round(product?.price * (1 - product.discount / 100))}$
          </span>
        ) : (
          ""
        )}
      </h1> */}
      <div className={styles.cardBody}>
        <h3>{product?.maker.name}</h3>
        <h4>{product?.model.name}</h4>
        <div className={styles.cardFeatures}>
          {product?.features.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
        <span className={styles.cardPrice}>
          {priceFormatter.format(Number(product?.price || 0))}
        </span>
        {/* <span onClick={() => setIsLong((prev) => !prev)}>{t("more")}</span> */}
      </div>
      <Button style={{ borderRadius: 10 }}>{t("showMore")}</Button>
    </div>
  );
}

export default memo(ProductCard) ;
