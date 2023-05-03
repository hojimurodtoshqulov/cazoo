import Title from "@/components/Title";
import styles from "./news.module.scss";
import NewsSlider from "@/components/NewsSlider";

function NewsSection() {
  return (
    <div className={styles.news}>
      <Title>Новости The Doors</Title>
      <NewsSlider />
    </div>
  );
}

export default NewsSection;
