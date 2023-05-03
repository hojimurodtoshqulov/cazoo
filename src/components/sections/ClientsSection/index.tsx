import Title from "@/components/Title";
import styles from "./crousel.module.scss";
import { useRef } from "react";
import ClientSlider from "@/components/ClientSlider";
import Blob from "@/components/Blob";
import useIntersectionObserver from "@/utils/InterSectionObserver";

function ClientsSection() {
  const ref = useRef(null);
  const entity = useIntersectionObserver(ref, {});

  return (
    <div
      className={`${entity?.isIntersecting && styles.active} ${
        styles.carousel
      }`}
      ref={ref}
    >
      <Blob blobType="first" color="blue" />
      <Blob blobType="second" color="blue" />
      <Blob blobType="third" color="blue" />
      <Blob blobType="fourth" color="blue" />
      <div className={styles.about}>
        <Title style={{ fontSize: 45 }}>What our customers are saying</Title>
        <p>
          Fantastic service again from Cazoo (2nd Car). Cannot fault their part ex for my other and the purchase of the new one. Car delivered today by the lovely Stuart - so pleased with my purchase. I wouldn’t hesitate to come back to Cazoo for my next car.
        </p>
      </div>
      <ClientSlider />
    </div>
  );
}

export default ClientsSection;
