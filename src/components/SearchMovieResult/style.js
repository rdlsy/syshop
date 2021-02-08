import styled from 'styled-components';

export const List = styled.ul`
  li {
      margin-bottom: 0.5em;
      font-size: 1.2rem;
      color: #241018;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1em;
        width: 120px;
        height: 38px;
        line-height: 36px;
        background-color: #f783ac;
        font-size: 1.1rem;
        font-weight: 600;
        color: #fff;
        svg {
          margin-right: 0.2em;
        }
      }
      span {
        b {
          color: #f783ac;
        }
        &:before {
          content: ' · ';
        }
        &:first-child {
          :before {
            display: none;
          }
        }
      }
      &:first-child {
        padding-bottom: 1rem;
        border-bottom: 1px solid #ececec;
        font-size: 2.8rem;
        em {
          display: block;
          font-size: 1.5rem;
          color: #999093;
        }
      }
      dl {
        display: flex;
        dt {
          width: 75px;
          color: #999093;
        }
      }
      em {
        font-style: normal;
        color: #f783ac;
      }
    }
  @media ${props => props.theme.tablet} {
    li {
      padding-right: 110px;
      line-height: 1.4;
      font-size: 1rem;
      &:first-child {
        padding-right: 0;
        font-size: 1.5rem;
        font-weight: 600;
        em {
          font-size: 1rem;
          font-weight: normal;
        }
      }
      .reqRlsDate {
        display: block;
        &:before {
          display: none;
        }
      }
      a {
        width: 110px;
        height: 33px;
        line-height: 31px;
        font-size: 1rem;
      }
      dl {
        position: relative;
        dt {
          position: absolute;
          left: 0;
          top: 0;
          width: 56px;
        }
        dd {
          padding-left: 56px;
          min-height: 20px;
        }
      }
    }
  }
`;
export const Item = styled.div`
  position: relative;
  padding-right: 235px;
  padding-bottom: 2rem;
  margin-bottom: 5em;
  border-bottom: 1px solid #ececec;
  @media ${props => props.theme.tablet} {
    padding-right: 0;
    padding-bottom: 1rem;
  }
`;
export const Total = styled.p`
  padding: 2rem 0 5rem;
  font-size: 1.3rem;
  color: #53474b;
  b {
    color: #241018;
  }
  @media ${props => props.theme.tablet} {
    padding: 2rem 0 1.2rem;
    font-size: 1.1rem;
  }
`;
export const Poster = styled.figure`
  position: absolute;
  right: 0;
  top: 0;
  width: 155px;
  img {
    width: 100%;
  }
  @media ${props => props.theme.tablet} {
    top: 78px;
    width: 95px;
  }
`;
