import styled from 'styled-components';

export const CartBody = styled.div`
  max-width: 800px;
  padding: 6rem 0 7rem;
  margin: 0 auto;
  @media ${props => props.theme.tablet} {
    padding: 2rem 1rem 4rem;
  }
`;
export const CartInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  background-color: #fff;
  text-align: left;
  @media ${props => props.theme.tablet} {
    width: 100%;
    height: auto;
    flex-direction: column;
  }
`;
export const Title = styled.p`
  padding-bottom: 1.7rem;
  font-size: 2rem;
  font-weight: 600;
  @media ${props => props.theme.tablet} {
    padding-bottom: 1rem;
    font-size: 1.2rem;
  }
`;
export const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 0;
  border-bottom: 1px solid #ececec;
  &:first-child {
    border-top: 1px solid #ececec;
  }
  &.none {
    justify-content: center;
    align-items: center;
    height: 100px;
  }
  @media ${props => props.theme.tablet} {
    flex-direction: column;
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: row;
  figure {
    width: 100px;
    margin-right: 1.5em;
    img {
      width: 100%;
    }
  }
  .price {
    margin-left: auto;
  }
  @media ${props => props.theme.tablet} {
    position: relative;
    padding-left: 120px;
    margin-bottom: 1.2rem;
    height: 100px;
    figure {
      position: absolute;
      top: 0;
      left: 0;
      margin-right: 0;
    }
  }
`;
export const Options = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 495px;
  max-width: 100%;
  .name {
    padding: 0.5rem 0 0;
    font-size: 1.3rem;
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.3rem;
    select {
      width: 80px;
      height: 35px;
      line-height: 35px;
      border-color: #c2b7bb;
      border-radius: 3px;
      background: url('/sylog/arrow.png') no-repeat right 8px center;
      background-size: 18%;
      appearance: none;
      text-indent: 12px;
    }
  }
  @media ${props => props.theme.tablet} {
    width: 100%;
  }
`;
export const Btns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  button {
    display: block;
    width: 115px;
    height: 46px;
    line-height: 44px;
    text-align: center;
    font-size: 1rem;
    cursor: pointer;
    &.buy {
      border: 1px solid #f783ac;
      color: #f783ac;
    }
    &.remove {
      margin-top: 0.5em;
      border: 1px solid #c2b7bb;
      color: #323232;
    }
  }
  @media ${props => props.theme.tablet} {
    flex-direction: row;
    button {
      width: 49%;
      &.remove {
        margin-top: 0;
        margin-left: 1%;
      }
    }
  }
`;
export const TotalPrice = styled.ul`
  padding: 1.8rem 0 3rem;
  dl {
    display: flex;
    justify-content: space-between;
    dt, dd {
      font-size: 1.3rem;
      font-weight: 600;
    }
  }
`;
export const OrderBtns = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    width: 115px;
    height: 46px;
    background-color: #f783ac;
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
  }
  @media ${props => props.theme.tablet} {
    button {
      width: 100%;
    }
  }
`;