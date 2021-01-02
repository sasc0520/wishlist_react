import React from 'react';
import styled from 'styled-components';
import Burger from '../burgerMenu/BurgerMenu';
import GlobalFonts from '../../fonts/fonts';

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  background-color: #ffffff;
  justify-content: space-between;
  overflow-x: hidden;
  .logo {
    padding: 15px 0;

    p {
        padding: 0;
        margin: 0;
        text-transform: uppercase;
        font-family: 'Oswald Regular';
        font-size: 1.5rem;
    }
}
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <p>Sascha</p>
      </div>
      <Burger />
      <GlobalFonts />
    </Nav>
  )
}

export default Navbar;