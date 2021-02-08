import React from 'react';
import { WiStars } from "react-icons/wi";
import { FiShoppingBag } from "react-icons/fi";
import { Link, withRouter } from 'react-router-dom';
import { HeaderContainer, HeaderInner, NavBar, Item } from './style';

function Header () {
  
  return (
    <HeaderContainer>
      <HeaderInner>
        <Link to="/" className="logo"><WiStars />SYSHOP</Link>
        <NavBar>
          <Item><Link to="/cart"><FiShoppingBag /></Link></Item>
        </NavBar>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default withRouter(Header);