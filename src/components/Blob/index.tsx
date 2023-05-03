import styles from "./blob.module.scss";

function Blob({
  blobType,
  color,
}: {
  blobType: string;
  color: "blue" | "orange";
}) {
  return (
    <div
      className={`${styles.blob} ${styles[blobType]} ${styles[color]}`}
    ></div>
  );
}

export default Blob;
