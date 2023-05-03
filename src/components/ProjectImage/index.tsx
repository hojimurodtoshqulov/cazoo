import useIntersectionObserver from "@/utils/InterSectionObserver";
import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import { MainPropType } from "@/shared/types";
import VanillaTilt from "vanilla-tilt";

// function ProjectImage({ src, style }: { src: string } & MainPropType) {
//   const ref = useRef(null);
//   const entity = useIntersectionObserver(ref, {});

//   return (
//     <img
//       src={src}
//       alt=""
//       className={`${styles.image} ${entity?.isIntersecting && styles.active}`}
//       style={style}
//       onMouseOver={(e) => {
//         const options = {
//           max: 20,
//           scale: 1.05,
//           speed: 1000,
//           glare: true,
//           "max-glare": 0.5,
//         };
//         VanillaTilt.init(e.currentTarget, options);
//       }}
//       onMouseLeave={(e) => {
//         VanillaTilt.init(e.currentTarget, options);
//       }}
//       ref={ref}
//     />
//   );
// }

// export default ProjectImage;
