import React from 'react';
import styled, { keyframes } from 'styled-components';

const imgAni = keyframes`
  0% {
    background-position: 50% 200%;
  }
  15% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 100%;
  }
`;
const MainWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MainImage = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 1rem;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #000;
  background-image: url('/sylog/image.png');
  background-repeat: no-repeat;
  background-size: 70%;
  border: 5px solid #000;
  animation: ${imgAni} 3s infinite linear;
  @media ${props => props.theme.mobile} {
    width: 80px;
    height: 80px;
  }
`

function Main() {
  return (
    <MainWrap>
      <MainImage />
      Hello!
    </MainWrap>
  );
}

export default Main;