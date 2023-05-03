import { MainPropType } from "@/shared/types";
import React, { useRef } from "react";
import styles from "./style.module.scss";
import { BiSearch } from "react-icons/bi";
import useIntersectionObserver from "@/utils/InterSectionObserver";

function ShowcaseContent({
  children,
  title,
  paragraph,
}: MainPropType & { title: React.ReactNode; paragraph: string }) {
  const ref = useRef(null);
  const entity = useIntersectionObserver(ref, {});

  return (
    <div
      className={`${styles.content} ${entity?.isIntersecting && styles.active}`}
      ref={ref}
    >
      <div>
        <div>
          <h1>{title} </h1>
        </div>
        <p>{paragraph}</p>
        {children}
      </div>
    </div>
  );
}

export default ShowcaseContent;
