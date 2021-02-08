import styled from 'styled-components';

export const Detail = styled.div`
  max-width: 800px;
  padding: 6rem 0 7rem;
  margin: 0 auto;
  @media ${props => props.theme.tablet} {
    max-width: 100%;
    padding: 0 0 4rem;
  }
`;
export const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 400px;
  background-color: #fff;
  text-align: center;
  @media ${props => props.theme.tablet} {
    width: 100%;
    height: auto;
    flex-direction: column;
  }
`;
export const Img = styled.figure`
  width: 400px;
  img {
    width: 100%;
  }
  @media ${props => props.theme.tablet} {
    width: 100%;
  }
`;
export const Order = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0 0;
  width: 335px;
  height: 100%;
  text-align: left;
  @media ${props => props.theme.tablet} {
    width: 100%;
    padding: 2rem 1rem 0;
  }
`;
export const OrderDetail = styled.div`
  padding-top: 1rem;
`;
export const Name = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  @media ${props => props.theme.tablet} {
    font-size: 1.3rem;
  }
`;
export const Info = styled.ul`
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ececec;
  li {
    position: relative;
    padding-left: 15px;
    margin-top: 1.5em;
    dl {
      display: flex;
      flex-direction: row;
      text-align: left;
      dt {
        width: 100px;
        font-size: 1.1rem;
        font-weight: 600;
      }
      dd {
        font-size: 1.1rem;
      }
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 7px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: #faa2c1;
    }
    &:first-child {
      margin-top: 0;
    }
  }
  @media ${props => props.theme.tablet} {
     li {
       margin-top: 0.8em;
       padding-left: 90px;
       &:before {
         top: 5px;
       }
       dl {
         dt {
            position: absolute;
            left: 10px;
            top: 0;
            width: auto;
            font-size: 0.9rem;
         }
         dd {
            font-size: 0.9rem;
         }
       }
     }
  }
`;
export const Quantity = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 52px;
  em {
    font-size: 1.1rem;
    font-weight: 600;
    font-style: normal;
  }
`;
export const QuantityBox = styled.div`
  margin-left: 1.5em;
  display: flex;
  text-align: center;
  border: 1px solid #ececec;
  span {
    display: block;
    width: 56px;
    height: 50px;
    line-height: 50px;
  }
  div {
    display: flex;
    flex-direction: column;
    width: 33px;
    height: 50px;
    border-left: 1px solid #ececec;
    font-size: 1.3rem;
    button {
      display: flex;
      flex: 0.5 1 0%;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:last-child {
        border-top: 1px solid #ececec;
      }
      svg {
        font-size: 1.2rem;
      }
    }
  }
`;
export const Price = styled.dl`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 45px;
  margin-bottom: 1.5em;
  dt {
    font-size: 1.3rem;
    font-weight: bold;
  }
  dd {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
export const Btns = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CartBtn = styled.button`
  width: 162px;
  height: 50px;
  background-color: #91445f;
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  @media ${props => props.theme.tablet} {
    width: 49%;
  }
`;
export const OrderBtn = styled.button`
  width: 162px;
  height: 50px;
  background-color: #f783ac;
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  @media ${props => props.theme.tablet} {
    width: 49%;
    margin-left: 1%;
  }
`
export const DetailImgArea = styled.div`
  padding-top: 5rem;
  margin-top: 5rem;
  border-top: 1px solid #ececec;
  img {
    width: 100%;
  }
  @media ${props => props.theme.tablet} {
    padding: 5rem 1rem 0;
  }
`;
export const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.3);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 11;
`;
export const PopupWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 1rem;
  width: 300px;
  height: 200px;
  background-color: #fff;
  border-radius: 25px;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 600;
  p {
    margin-top: 1em;
  }
  div {
    display: flex;
    margin-top: 1em;
    button {
      display: inline-block;
      margin: 0 0.3em;
      width: 108px;
      height: 35px;
      border: 1px solid #c2b7bb;
      border-radius: 20px;
      font-size: 1rem;
      color: #949494;
      cursor: pointer;
      &:last-child {
        margin: 0 0.3em;
        width: 108px;
        height: 35px;
        line-height: 33px;
        border: 1px solid #f783ac;
        border-radius: 20px;
        font-size: 1rem;
        color: #f783ac;
      }
    }
    a {
      margin: 0 0.3em;
      width: 108px;
      height: 35px;
      line-height: 33px;
      border: 1px solid #f783ac;
      border-radius: 20px;
      font-size: 1rem;
      color: #f783ac;
    }
  }
`;
