import { MainPropType } from "@/shared/types";
import styles from "./title.module.scss";
import useIntersectionObserver from "@/utils/InterSectionObserver";
import { useRef } from "react";

function Title({ style, children }: MainPropType) {
  const ref = useRef(null);
  const entity = useIntersectionObserver(ref, {});

  return (
    <h1
      className={`${entity?.isIntersecting && styles.active} ${styles.title}`}
      style={style}
      ref={ref}
    >
      {children}
    </h1>
  );
}

export default Title;
