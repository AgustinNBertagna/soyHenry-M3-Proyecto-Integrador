import { backData, frontData } from "../../helpers/aboutData";
import Card from "../../components/Card/Card";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1>Bienvenidos a mi Turnero Online</h1>
      <p>
        Esta página esta dedicada a las tecnologias que hicieron posible este
        proyecto.
      </p>
      <div className={styles.cardsContainer}>
        <h2>Tecnologias Del Backend</h2>
        <div className={styles.techCardsContainer}>
          {backData.map(({ title, img, desc }, index) => (
            <Card key={index} title={title} img={img} desc={desc} />
          ))}
        </div>
        <h2>Tecnologias Del Frontend</h2>
        <div className={styles.techCardsContainer}>
          {frontData.map(({ title, img, desc }, index) => (
            <Card key={index} title={title} img={img} desc={desc} />
          ))}
        </div>
      </div>
    </div>
  );
}
