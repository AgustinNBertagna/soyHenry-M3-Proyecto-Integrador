import styles from "./Card.module.css";

export default function Card({ title, img, desc }) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <img src={img} alt="" />
      <p>{desc}</p>
    </div>
  );
}
