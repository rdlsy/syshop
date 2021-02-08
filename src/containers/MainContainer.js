import React from 'react';
import Main from '../components/Main';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 6rem;
  @media ${props => props.theme.mobile} {
    height: auto;
    padding-top: 17rem;
    font-size: 4rem;
  }
`;

function MainContainer() {
  return (
    <Container>
      <Main />
    </Container>
  );
}

export default MainContainer;