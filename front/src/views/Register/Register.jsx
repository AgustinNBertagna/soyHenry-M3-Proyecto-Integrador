import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RegisterInputField from "../../components/InputFields/RegisterInputField";
import Button from "../../components/Button/Button.jsx";
import NavButton from "../../components/NavButton/NavButton";
import {
  initialUserData,
  formData,
  navBtnData,
} from "../../helpers/registerData.js";
import {
  handleInputChange,
  handleReset,
  handleSubmit,
} from "../../helpers/registerHandlers";
import styles from "./Register.module.css";

export default function Register() {
  const user = useSelector((state) => state.user);
  const [userData, setUserData] = useState(initialUserData);
  const [errors, setErrors] = useState(initialUserData);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.login) navigate("/home");
  }, [user.user]);

  return (
    <form
      className={styles.formContainer}
      onSubmit={(event) => handleSubmit(event, userData, errors, navigate)}>
      <h2>¡Registrate!</h2>
      {formData.map(({ label, name, type, placeholder }, index) => (
        <RegisterInputField
          key={index}
          label={label}
          name={name}
          type={type}
          value={userData[name]}
          placeholder={placeholder}
          handleInputChange={(event) =>
            handleInputChange(event, userData, setUserData, errors, setErrors)
          }
          error={errors[name]}
        />
      ))}
      <Button
        btnText="Registrarse"
        disabled={Object.values(errors).some((error) => error !== undefined)}
      />
      <Button
        btnText="Restablecer Registro"
        onClick={(event) => handleReset(event, setUserData, setErrors)}
      />
      {navBtnData.map(({ spanTxt, to, btnTxt }, index) => (
        <NavButton key={index} spanTxt={spanTxt} to={to} btnTxt={btnTxt} />
      ))}
    </form>
  );
}
