import { ProductType } from "@/shared/types";
import styles from "./modale.module.scss";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
function Modal({
  children,
  setIsModal,
  isModal,
}: {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
  isModal: boolean;
}) {
  useEffect(() => {
    const y = window.scrollY;
    const handleScroll = () => {
      isModal && window.scrollTo(window.scrollX, y);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isModal]);

  return (
    <div className={`${styles.modal} ${isModal && styles.active}`}>
      <p
        onClick={() => {
          setIsModal(false);
        }}
        className={styles.back}
      ></p>
      <p
        onClick={() => {
          setIsModal(false);
        }}
        className={styles.back}
      ></p>
      <div className={styles.content}>
        {" "}
        <RxCross1
          className={styles.x}
          onClick={() => {
            setIsModal(false);
          }}
        />
        {children}
      </div>
    </div>
  );
}
export default Modal;
