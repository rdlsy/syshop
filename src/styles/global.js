import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 14px;
  }
  body{
    overflow-x: hidden;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, textarea, button {
    background-color: transparent;
    border: none;
    outline: none;
    appearance: none;
    border-radius: 0;
  }
  h1, h2, h3, h4, h5, h6{
    font-family: 'Roboto', sans-serif;
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .Loading {position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);display: flex;width: 84px;height: 20px;text-align: center;justify-content: center;align-items: center;}
  .Loading span{position: absolute;display: block;margin: 0 5px;display: inline-block;width: 20px;height: 20px;border-radius: 50%;}
  .Loading span.l1{left: 0;background-color: #f8b26a;animation: loading1 0.8s linear infinite;}
  .Loading span.l2{left: 30px;background-color: #abbd81;animation: loading2 0.8s linear infinite;}
  .Loading span.l3{left: 60px;background-color: #e15b64;animation: loading3 0.8s linear infinite;}

  @keyframes loading1 {
    0% {
      left: 0;
      transform: scale(0);
    }
    25% {
      left: 0;
      transform: scale(1);
    }
    50% {
      left: 30px;
      transform: scale(1);
    }
    75% {
      left: 60px;
      transform: scale(1);
    }
    100% {
      left: 60px;
      transform: scale(0);
    }
  }

  @keyframes loading2 {
    0% {
      left: 30px;
      transform: scale(1);
    }
    25% {
      left: 60px;
      transform: scale(1);
    }
    50% {
      left: 60px;
      transform: scale(0); 
    }
    75% {
      left: 0;
      transform: scale(0);
    }
    100% {
      left: 30px;
      transform: scale(1);
    }
  }

  @keyframes loading3 {
    0% {
      left: 60px;
      transform: scale(0);
    }
    25% {
      left: 0;
      transform: scale(0);
    }
    50% {
      left: 0;
      transform: scale(1); 
    }
    75% {
      left: 30px;
      transform: scale(1);
    }
    100% {
      left: 60px;
      transform: scale(1);
    }
  }

  .Error {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 5rem 0 0;
    font-size: 3rem;
    font-weight: bold;
    span {
      display: block;
      margin-bottom: 1em;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: url('/sylog/error.jpeg') no-repeat center;
      background-size: 410px;
    }
    @media ${props => props.theme.tablet} {
      padding: 3rem 0 0;
      font-size: 2rem;
      span {
        width: 200px;
        height: 200px;
        background-size: 300px; 
      }
    }
  }
`;

export default GlobalStyle;