import styled from 'styled-components';

export const InserForm = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 800px;
  max-width: 100%;
`;
export const Wrap = styled.div`
  display: flex;
  margin-top: 10px;
  div {
    width: 50%;
    padding-left: 5px;
    :first-child {
      padding-left: 0;
      padding-right: 5px;
    }
  }
`;
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
export const Input = styled.input`
  width: 100%;
  padding: 0 1rem;
  height: 37px;
  border: 1px solid #c2b7bb;
  font-size: 1rem;
  &::placeholder {
    color: #c2b7bb;
  }
  &:focus {
    border-color: #faa2c1;
  }
`;
export const Button = styled.button`
  width: 105px;
  height: 36px;
  background-color: #f783ac;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
`;
