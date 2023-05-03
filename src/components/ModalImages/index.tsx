import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styles from "./styles.module.scss";
import hero from "../../../public/media/Rectangle 6959.png";
import ImageMagnifierGlass from "../ImageMagnifier";

function ModalImages({
  images,
  setBigImage,
}: {
  images?: number[];
  setBigImage: Dispatch<
    SetStateAction<{
      src: string;
      isActive: boolean;
    }>
  >;
}) {
  const [image, setImage] = useState(images?.[0] || 0);

  useEffect(() => {
    setImage(images?.[0] || 0);
  }, [images]);

  console.log(images);

  return (
    <div className={styles.images}>
      <div className={styles.miniimages}>
        {images?.map((image: number) => (
          <img
            src={`https://the-doors.herokuapp.com/api/files/${image}`}
            onClick={(e) => {
              setImage(image);
            }}
          />
        ))}
        {/* <img
          src={`data:image/png;base64,${images?.[0].data}`}
          onClick={(e) => {
            setImage(images?.[0].data || "");
          }}
        /> */}
      </div>
      <ImageMagnifierGlass
        imageSrc={image}
        onClick={() => {
          setBigImage({
            src: `https://the-doors.herokuapp.com/api/files/${image}`,
            isActive: true,
          });
        }}
      />
    </div>
  );
}

export default ModalImages;
