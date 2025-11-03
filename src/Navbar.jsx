import { useContext } from "react";
import { Link } from "react-router-dom";
import NavStyle from "./components/styles/Navbar.style.js";
import { propContext } from "./contexts/PropContext.js";
import NightIcon from "./icons/night.jsx";
import LightIcon from "./icons/light.jsx";
import styled from "styled-components";
import { motion } from "framer-motion";
import LightLogo from "./icons/logo_light.jsx";
import DarkLogo from "./icons/logo_dark.jsx";

const { Container, Nav } = NavStyle;

const Resume = styled(motion.a)`
  border: 1px solid ${({ theme }) => theme.font.secondaryText};
  color: ${({ theme }) => theme.color.backgroundColor} !important;
  background-color: ${({ theme }) => theme.logo.color};
  font-weight: 500;
  border-radius: 2px;
  padding: 4px 10px;
  font-size: 0.8rem;
  letter-spacing: 1px;
  margin-right: 3rem;
`;

const Navbar = ({ theme, invertTheme, setHere }) => {
  const { switched, setSwitched } = useContext(propContext);

  const Flick = () => {
    if (switched === "") {
      setSwitched("switched");
      setHere(invertTheme);
    } else {
      setSwitched("");
      setHere(theme);
    }
  };

  return (
    <Nav>
      <Link
        to="/"
        style={{
          marginRight: "auto",
        }}
      >
        {switched === "switched" ? <LightLogo /> : <DarkLogo />}
      </Link>
      <Resume
        href="https://drive.google.com/file/d/1zul6kj4cH1UWvor4dLfFTBqzPScZGUG0/view?usp=sharing"
        target="_blank"
        whileTap={{ scale: 0.9, transition: { ease: "easeInOut" } }}
      >
        RESUME
      </Resume>
      <Container onClick={() => Flick()}>
        {switched === "switched" ? <NightIcon /> : <LightIcon />}
      </Container>
    </Nav>
  );
};

export default Navbar;
