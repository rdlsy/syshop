import styled from 'styled-components';

export const Textarea = styled.textarea`
  width: 100%;
  height: 102px;
  padding: 1rem;
  border: 1px solid #faa2c1;
  resize: none;
  font-size: 1.2rem;
  ::placeholder {
    color:#faa2c1;
  }
`;
export const Button = styled.button`
  width: 105px;
  height: 36px;
  background-color: #f783ac;
  font-size: 1rem;
  color: #fff;
`;
export const List = styled.ul`
  width: 800px;
  max-width: 100%;
  padding: 6rem 0 0;
  text-align: left;
  @media ${props => props.theme.tablet} {
    padding: 3rem 0 0;
  }
`;
export const Btns = styled.button`
  position: absolute;
  top: 1.8rem;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  cursor: pointer;
  svg {
    margin-left: 0.5em;
    font-size: 1.2rem;
    color: #c2b7bb;
    &:hover {
      color: #f783ac;
    }
  }
`;
export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  border-bottom: 1px solid #e9ecef;
  @media ${props => props.theme.tablet} {
    padding: 1rem 0;
    padding-right: 2.5rem;
  }
`;
export const Head = styled.div`
  display: flex;
  padding-bottom: 1.8rem;
  svg {
    font-size: 3.8rem;
    color: #ececec;
  }
  dl {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1.3rem;
    dt {
      font-size: 1.2rem;
      font-weight: 600;
    }
    dd {
      color: #c2b7bb
    }
  }
`;
export const Text = styled.span`
  max-width: 100%;
  font-size: 1.3rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export const Password = styled.div`
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
export const PasswordWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 300px;
  height: 200px;
  background-color: #fff;
  border-radius: 25px;
  text-align: center;
  input {
    margin: 1em 0 2em;
    width: 200px;
    padding: 0 0.5rem;
    height: 35px;
    border: 1px solid #c2b7bb;
    &:focus {
      border-color: #faa2c1;
    }
  }
  button {
    margin: 0 0.3em;
    width: 65px;
    height: 35px;
    border: 1px solid #c2b7bb;
    border-radius: 20px;
    color: #c2b7bb;
    cursor: pointer;
    &:first-child {
      border-color: #f783ac;
      color: #f783ac;
    }
  }
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
