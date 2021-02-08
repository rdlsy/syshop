import React, { useEffect, useState } from 'react';
import { WiStars } from "react-icons/wi";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai"
import { Link } from 'react-router-dom';
import { HeaderContainer, HeaderInner, NavBar, Item } from './style';

export default function Header ({ location }) {
  const [open, setOpen] = useState(false);
  const onToggle = () => {
    setOpen(!open);
  }
  const pathName = location.pathname;
  const menu = [
    {
      name: '영화검색',
      pathname: '/movies'
    },
    // {
    //   name: '방명록',
    //   pathname: '/posts'
    // },
    {
      name: '먹스타그램',
      pathname: 'https://mukstagram.herokuapp.com/'
    },
    {
      name: '쇼핑',
      pathname: '/product'
    },
    {
      name: '장바구니',
      pathname: '/cart'
    }
  ];

  useEffect(() => {
    if(pathName.indexOf('/product') !== -1) {
      if (pathName !== '/product') {
        document.querySelector('#m_2').classList.add('active')
        document.querySelector('#mm_2').classList.add('active')
      }
    } else {
      document.querySelector('#m_2').classList.remove('active')
      document.querySelector('#mm_2').classList.remove('active')
    }
  });
  
  return (
    <HeaderContainer>
      <HeaderInner>
        <Link to="/" className="logo"><WiStars />SYLOG</Link>
        <NavBar>
          <button onClick={onToggle}>{open ? <CgClose /> : <FiMenu />}</button>
          <ul className="menu_pc">
            {
              menu.map((item, index) => (
                <li id={`m_${index}`} key={index} className={pathName === item.pathname ? 'active' : ''}>
                  {
                    index === 1 ?
                    <a href={item.pathname} target="_blank" rel="noreferrer">{item.name}</a> :
                    <Link to={item.pathname}>{item.name}</Link>
                  }
                </li>
              ))
            }
          </ul>
          <ul className={open ? 'menu_m active' : 'menu_m'}>
            {
              menu.map((item, index) => (
                <li id={`mm_${index}`} key={index} className={pathName === item.pathname ? 'active' : ''} onClick={onToggle}>
                  {
                    index === 1 ?
                    <a href={item.pathname} target="_blank" rel="noreferrer">{item.name}</a> :
                    <Link to={item.pathname}>{item.name}</Link>
                  }
                </li>
              ))
            }
          </ul>
          <Item href="https://github.com/rdlsy" target="_blank" rel="noreferrer"><AiFillGithub /></Item>
        </NavBar>
      </HeaderInner>
    </HeaderContainer>
  );
};