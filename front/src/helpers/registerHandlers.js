import axios from "axios";
import validateRegister from "./validateRegister";
import { initialUserData } from "./registerData";

export const handleInputChange = (
  event,
  userData,
  setUserData,
  errors,
  setErrors
) => {
  const { name, value } = event.target;

  setUserData({
    ...userData,
    [name]: value,
  });

  const userErrors = validateRegister({
    ...userData,
    [name]: value,
  });

  setErrors({
    ...errors,
    [name]: userErrors[name],
  });
};

export const handleReset = (event, setUserData, setErrors) => {
  event.preventDefault();
  setUserData(initialUserData);
  setErrors(initialUserData);
};

export const handleSubmit = async (event, userData, errors, navigate) => {
  const URL = "http://localhost:3000/users/register";
  const emptyFields = Object.values(userData).some(
    (appointment) => appointment === ""
  );
  const errorFields = Object.values(errors).some(
    (error) => error !== undefined
  );
  event.preventDefault();
  if (emptyFields) alert("Faltan campos.");
  else if (errorFields) alert("Algunos campos tienen errores.");
  else {
    const user = {
      userData: {
        name: userData.name,
        email: userData.email,
        birthdate: userData.birthDate,
        nDni: userData.nDni,
      },
      credentialsData: {
        username: userData.username,
        password: userData.password,
      },
    };
    try {
      const response = await axios.post(URL, user);
      alert(response.data.message);
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      alert(error.response.data.error);
    }
  }
};
