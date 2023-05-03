import React, { Dispatch, SetStateAction } from "react";
import "./slider.module.scss";
import Slider from "react-slick";
import { ProductType } from "@/shared/types";
import ProductCard from "../ProductCard";

function CardsSlider({
  products,
  setProduct,
  setIsModal,
}: {
  products: ProductType[];
  setProduct: Dispatch<SetStateAction<ProductType | undefined>>;
  setIsModal: Dispatch<SetStateAction<boolean>>;
}) {
  const settings = {
    customPaging: function () {
      return (
        <a>
          <button></button>{" "}
        </a>
      );
    },

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dotsClass: "slick-dot",
    centerPadding: "60px",
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="cards-slider-component">
      <Slider {...settings}>
        {products.map((product: ProductType) => (
          <div key={product.id}>
            <ProductCard
              key={product.id}
              setProduct={setProduct}
              product={product}
              style={{ width: "90%", margin: "0 auto" }}
              setIsModal={setIsModal}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CardsSlider;
