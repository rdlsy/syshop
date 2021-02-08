import React, { useState } from 'react';
import { InserForm, Textarea, Wrap, Input, Button } from './style';

export default function PostInsert({ onCreate }) {
  const [inputs, setInputs] = useState({
    text: '',
    name: '',
    password: '',
  });
  const onChange = e => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const onSubmit = e => {
    e.preventDefault();
    if (inputs.text && inputs.name && inputs.password) {
      alert('방명록이 등록되었습니다.')
      onCreate({
        ...inputs
      });
      setInputs({
        text: '',
        name: '',
        password: '',
      });
    } else {
      alert('모두 입력해주세요.')
    }
  };

  return (
    <InserForm onSubmit={onSubmit}>
      <Textarea 
        value={inputs.text}
        onChange={onChange}
        name="text"
        placeholder="방명록을 입력해주세요."
      />
      <Wrap>
        <div>
          <Input
            type="text"
            value={inputs.name}
            placeholder="이름"
            name="name"
            onChange={onChange}
          />
        </div>
        <div>
          <Input
            type="password"
            value={inputs.password}
            placeholder="비밀번호"
            name="password"
            onChange={onChange}
          />
        </div>
      </Wrap>
      <Wrap style={{justifyContent: 'flex-end'}}>
        <Button type="submit">등록</Button>
      </Wrap>
    </InserForm>
  );
}