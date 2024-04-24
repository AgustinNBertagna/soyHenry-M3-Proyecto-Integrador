import { contactData } from "../../helpers/contactData";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h1>¿Te intereso mi proyecto? Contactame!</h1>
      <ul>
        {contactData.map(({ icon, anchorText, anchorLink }, index) => (
          <li key={index}>
            <img src={icon} />
            <a target="_blank" href={anchorLink}>
              {anchorText}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
