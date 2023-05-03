import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

function Image({ ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const options = {
      max: 20,
      scale: 1.05,
      speed: 1000,
      glare: true,
      "max-glare": 0.5,
    };
    VanillaTilt.init(ref.current, options);
  }, [ref]);

  return <img {...rest} ref={ref} />;
}

export default Image;
