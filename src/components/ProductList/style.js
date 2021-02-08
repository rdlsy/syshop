import styled from 'styled-components';

export const List = styled.div`
  max-width: 800px;
  padding: 4rem 0 7rem;
  margin: 0 auto;
  @media ${props => props.theme.tablet} {
    padding: 2rem 0.5rem 4rem;
  }
  ::after {
    content: '';
    display: block;
    clear: both;
  }
`;
export const Item = styled.div`
  position: relative;
  float: left;
  width: calc(100% / 4);
  padding: 10px 10px 50px;
  box-sizing: border-box;
  list-style: none;
  @media ${props => props.theme.tablet} {
    width: calc(100% / 2);
  }
  @media ${props => props.theme.mobile} {
    width: calc(100% / 1);
  }
`;
export const Img = styled.figure`
  img {
    width: 100%;
  }
`;
export const Name = styled.p`
  margin-top: 1em;
  height: 2.8em;
  font-size: 0.8rem;
  @media ${props => props.theme.tablet} {
    height: auto;
    padding-bottom: 1rem;
    font-size: 1.3rem;
  }
`;
export const Price = styled.div`
  padding-top: 0.5rem;
  border-top: 1px solid #ececec;
  font-size: 0.8rem;
  @media ${props => props.theme.tablet} {
    font-size: 1rem;
  }
`;
