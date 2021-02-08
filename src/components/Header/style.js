import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 8px;
  z-index: 10;
`;
export const HeaderInner = styled.div`
  max-width: 1024px;
  height: 56px;
  padding: 0 1.2rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 900;
    color: #1e1e1e;
    z-index: 12;
    svg {
      margin-right: .1em;
      font-size: 1.7rem;
      color: #ffd43b;
    }
  }
  @media ${props => props.theme.tablet} {
    padding: 0 0 0 1rem;
  }
`;
export const NavBar = styled.nav`
  display: flex;
  button {
    display: none;
    width: 56px;
    height: 56px;
    svg {
      font-size: 2rem;
    }
  }
  .menu_pc {
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      margin-left: 2rem;
      &.active {
        font-weight: 600;
        color: #f783ac;
      }
    }
  }
  .menu_m {
    position: fixed;
    right: -100%;
    top: 0;
    background-color: #fff;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 11;
    transition: right .5s;
    &.active {
      display: flex;
      right: 0;
    }
    li {
      margin: 0 0 2em;
      a {
        font-size: 2rem;
      }
      &.active {
        font-weight: 600;
        color: #f783ac;
      }
    }
  }
  @media ${props => props.theme.tablet} {
    button {
      position: relative;
      display: block;
      z-index: 12;
    }
    ul {
      position: fixed;
      right: -100%;
      top: 0;
      background-color: #fff;
      width: 100%;
      height: 100%;
      display: none;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      z-index: 11;
      transition: right .5s;
      &.active {
        display: flex;
        right: 0;
      }
      li {
        margin: 0 0 2em;
        a {
          font-size: 2rem;
        }
      }
    }
  }
`;

export const Item = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1.2rem;
  font-size: 2rem;
  cursor: pointer;
  @media ${props => props.theme.tablet} {
    margin-left: 0;
    order: -1;
  }
`;
