import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginInputField from "../../components/InputFields/LoginInputField";
import Button from "../../components/Button/Button.jsx";
import NavButton from "../../components/NavButton/NavButton";
import { handleInputChange, handleSubmit } from "../../helpers/loginHandlers";
import {
  initialCredentials,
  formData,
  navBtnData,
} from "../../helpers/loginData";
import styles from "./Login.module.css";

export default function Login() {
  const user = useSelector((state) => state.user);
  const [credentialData, setCredentialData] = useState(initialCredentials);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.login) navigate("/home");
  }, [user.user]);

  return (
    <form
      onSubmit={(event) =>
        handleSubmit(event, credentialData, dispatch, navigate)
      }
      className={styles.formContainer}>
      <h1>¡Inicia Sesion!</h1>
      {formData.map(({ label, name, type, placeholder }, index) => (
        <LoginInputField
          key={index}
          label={label}
          name={name}
          type={type}
          value={credentialData[name]}
          placeholder={placeholder}
          handleInputChange={(event) =>
            handleInputChange(event, credentialData, setCredentialData)
          }
        />
      ))}
      <Button
        btnText={"Iniciar Sesion"}
        disabled={!credentialData.username || !credentialData.password}
      />
      {navBtnData.map(({ spanTxt, to, btnTxt }, index) => (
        <NavButton key={index} spanTxt={spanTxt} to={to} btnTxt={btnTxt} />
      ))}
    </form>
  );
}
