// @ts-nocheck

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
import {API_URL} from "@/hooks/requests";

function ModalImages({
  imageId,
  setBigImage,
}: {
  images?: number;
  setBigImage: Dispatch<
    SetStateAction<{
      src: string;
      isActive: boolean;
    }>
  >;
}) {
  const [image, setImage] = useState(imageId);

  useEffect(() => {
    setImage(imageId );
  }, [imageId]);

  console.log(imageId);

  return (
    <div className={styles.images}>
     {/*  <div className={styles.miniimages}>
        {images?.map((image: number) => (
          <img
            src={`${API_URL}/files/${image}`}
            onClick={(e) => {
              setImage(image);
            }}
          />
        ))}
        <img
          src={`data:image/png;base64,${images?.[0].data}`}
          onClick={(e) => {
            setImage(images?.[0].data || "");
          }}
        />
      </div> */}
        <img className={styles.img}
            src={`${API_URL}/files/${imageId}`}
        />
      {/*<ImageMagnifierGlass*/}
      {/*  imageSrc={image}*/}
      {/*  onClick={() => {*/}
      {/*    setBigImage({*/}
      {/*      src: `${API_URL}${image}`,*/}
      {/*      isActive: true,*/}
      {/*    });*/}
      {/*  }}*/}
      {/*/>*/}
    </div>
  );
}

export default ModalImages;
