import { useContext } from 'react';
import { Link } from "react-router-dom";
import NavStyle from './components/styles/Navbar.style';
import { propContext } from './App';
import NightIcon from './icons/night'
import LightIcon from './icons/light';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import LightLogo from './icons/logo_light'
import DarkLogo from './icons/logo_dark'

const { Container, Nav, } = NavStyle

const Navbar = ({ theme, invertTheme, setHere}) => {
  const { switched, setSwitched } = useContext(propContext)
  
  const Flick = () => {
    if (switched === '') {
      setSwitched('switched')
      setHere(invertTheme)
    } else {
      setSwitched('')
      setHere(theme)
    }
  }

  const Resume = styled(motion.a)`  
    border: 1px solid ${({theme}) => theme.font.secondaryText};
    color: ${({theme}) => theme.color.backgroundColor} !important;
    background-color: ${({theme}) => theme.logo.color};
    font-weight: 500;
    border-radius: 2px;
    padding: 4px 10px;
    font-size: .8rem;
    letter-spacing: 1px;
    margin-right: 3rem;
  `


  return (
    <Nav>
      <Link to="/" style={{
        marginRight: "auto"
      }}>
        {switched === 'switched' ? <LightLogo /> : <DarkLogo />}
      </Link>
      <Resume href='https://drive.google.com/file/d/1ZrSC0ikRsXlj4hF8QU6brIo5lLifVez5/view?usp=sharing' target='_blank'
      whileTap={{scale: 0.9, transition: {ease: 'easeInOut'}}}
      >
        RESUME
      </Resume>
      <Container onClick={() => Flick()}>
      {switched === 'switched' ? <NightIcon/> : <LightIcon/>}
      </Container>
    </Nav>
  );
}
 
export default Navbar;