import React, { useState, useEffect } from "react";
import styles from "./image.module.scss";
interface ImageMagnifierGlassProps {
  imageSrc: number;
  zoomLevel?: number;
  onClick: () => void;
}

interface GlassPosition {
  x: number;
  y: number;
}

interface GlassSize {
  width: number;
  height: number;
}

interface ImageSize {
  width: number;
  height: number;
}

const ImageMagnifierGlass: React.FC<ImageMagnifierGlassProps> = ({
  imageSrc,
  zoomLevel = 3,
  onClick,
}) => {
  console.log(imageSrc);
  const img = `https://the-doors.herokuapp.com/api/files/${imageSrc}`;

  const [glassPosition, setGlassPosition] = useState<GlassPosition>({
    x: 0,
    y: 0,
  });
  const [glassSize, setGlassSize] = useState<GlassSize>({
    width: 0,
    height: 0,
  });
  const [imageSize, setImageSize] = useState<ImageSize>({
    width: 0,
    height: 0,
  });
  const [showMagnifier, setShowMagnifier] = useState<boolean>(false);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const image = event.currentTarget;
    const { left: imageX, top: imageY } = image.getBoundingClientRect();
    const { clientX: mouseX, clientY: mouseY } = event;
    const glassWidth = image.clientWidth / zoomLevel;
    const glassHeight = glassWidth;
    const glassLeft = mouseX - imageX - glassWidth / 2;
    const glassTop = mouseY - imageY - glassHeight / 2;

    setGlassPosition((prevState) => ({ ...prevState, x: glassLeft }));

    setGlassPosition((prevState) => ({ ...prevState, y: glassTop }));

    setGlassSize({ width: glassWidth, height: glassHeight });
    setShowMagnifier(true);
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  return (
    <div className={styles.container} onClick={onClick}>
      <img
        className={styles.mainimage}
        src={img}
        alt="Main Image"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onLoad={(e) => {
          const image = e.currentTarget;
          setImageSize({
            width: image.width,
            height: image.height,
          });
        }}
      />
      {showMagnifier && (
        <div
          className={styles.magnifierglass}
          style={{
            left: `${glassPosition.x}px`,
            top: `${glassPosition.y}px`,
            width: `${glassSize.width}px`,
            height: `${glassSize.height}px`,
            backgroundImage: `url("data:image/png;base64,${imageSrc}")`,
            backgroundSize: `${100 * zoomLevel * zoomLevel}% ${
              100 * zoomLevel * zoomLevel
            }%`,
            backgroundPosition: `${
              ((glassPosition.x + glassSize.width / 2) * 100) / imageSize.width
            }% ${
              ((glassPosition.y + glassSize.height / 2) * 100) /
              imageSize.height
            }%`,
          }}
        ></div>
      )}
    </div>
  );
};

export default ImageMagnifierGlass;
