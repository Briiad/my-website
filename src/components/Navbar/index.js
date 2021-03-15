import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"

// IMPORT ELEMENTS
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavMenu,
  NavItem,
  NavLinks,
  MobileIcon,
} from './NavElement'

const Navigation = () => {

  const [click, setClick] = useState(false);
  const [Scroll, setScroll] = useState(false);

  const handleClick = () => setClick(!click);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  };

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#141414" }}>
        <Nav active={Scroll} click={click} >
          <NavbarContainer>
            <NavLogo>
              <NavIcon />
                BRAYEN
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click} >
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/projects">Project</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/contacts">Contact</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navigation
