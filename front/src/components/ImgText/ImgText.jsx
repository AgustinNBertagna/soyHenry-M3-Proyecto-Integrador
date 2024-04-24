import appointmentImg from "../../assets/imgText.jpg";
import styles from "./ImgText.module.css";

export default function imgText({ text }) {
  return (
    <div className={styles.appointmentContainer}>
      <img src={appointmentImg} />
      <p>{text}</p>
    </div>
  );
}
