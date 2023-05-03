import React from "react";
import image from "../../../public/media/Rectangle 15.png";
import styles from "./card.module.scss";

function NewsCard() {
  return (
    <div className={styles.newscard}>
      {" "}
      <img src={image.src} alt="" />
      <p>
        Lörem ipsum plaren sust. Telenas agnostitism kana såsom fysisk cd.
        Supratarade mism pobaliga.
      </p>
    </div>
  );
}

export default NewsCard;
