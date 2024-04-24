import styles from "./Button.module.css";

export default function SubmitButton({ btnText, disabled, onClick }) {
  return (
    <button
      type="submit"
      className={disabled ? styles.disabledButton : styles.button}
      disabled={disabled}
      onClick={onClick}>
      {btnText}
    </button>
  );
}
