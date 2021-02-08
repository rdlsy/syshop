import styled, { css } from 'styled-components';

export const InserForm = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.current && css`
    border-color: #241018;
  `}
`;
export const InsertBtn = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  width: 64px;
  height: 64px;
  svg {
    font-size: 2.2rem;
    color: #241018;
  }
  @media ${props => props.theme.tablet} {
    width: 46px;
    height: 36px;
    svg {
      font-size: 1.5rem;
    }
  }
`;
export const Input = styled.input`
  width: 100%;
  padding: 0 4.5rem 0 2rem;
  height: 64px;
  border: 1px solid #c2b7bb;
  font-size: 1.8rem;
  transition: 0.3s;
  &::placeholder {
    color: #c2b7bb;
  }
  &:focus {
    border-color: #241018;
  }
  @media ${props => props.theme.tablet} {
    padding: 0 3rem 0 1rem; 
    height: 36px;
    font-size: 1.3rem;
  }
`;
export const Text = styled.p`
  margin-bottom: 0.5em;
  font-size: 1.1rem;
  font-weight: 600;
  color: #241018;
`;
