import axios from "axios";
import { setUserData } from "../redux/userSlice";

export function handleInputChange(event, credentialData, setCredentialData) {
  const { name, value } = event.target;

  setCredentialData({
    ...credentialData,
    [name]: value,
  });
}

export async function handleSubmit(event, credentialData, dispatch, navigate) {
  const URL = "http://localhost:3000/users/login";
  event.preventDefault();
  if (Object.values(credentialData).some((credential) => credential === ""))
    alert("Faltan campos.");
  else {
    const credentials = {
      credentialsData: {
        username: credentialData.username,
        password: credentialData.password,
      },
    };
    try {
      const response = await axios.post(URL, credentials);
      dispatch(setUserData(response.data));
      alert("Sesion iniciada correctamente.");
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (error) {
      alert(error.response.data.error);
    }
  }
}
