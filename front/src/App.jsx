import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home/Home";
import Register from "./views/Register/Register";
import MyAppointments from "./views/MyAppointments/MyAppointments";
import Login from "./views/Login/Login";
import Schedule from "./views/Schedule/Schedule";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Error from "./views/Error/Error";

export default function App() {
  const location = useLocation();
  const showNavBar =
    location.pathname === "/" ||
    location.pathname === "/home" ||
    location.pathname === "/appointments" ||
    location.pathname === "/schedule" ||
    location.pathname === "/about" ||
    location.pathname === "/contact";

  return (
    <>
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointments" element={<MyAppointments />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
