import React, { useState, useRef } from 'react';
import { FiSearch } from "react-icons/fi";
import { Text, InserForm, Input, InsertBtn } from './style';

export default function SearchMovie({ onInsert, history }) {
  const [value, setValue] = useState('');
  const onChange = e => {
    setValue(e.target.value);
  }
  const onSubmit = e => {
    e.preventDefault();
    if (value) {
      onInsert(value);
      history.push(`/movies?q=${value}`);
    }
  }
  const onFocus = () => {
    searchInput.current.focus();
  }
  const searchInput = useRef();
  return (
    <>
      <Text>영화를 검색해보세요!</Text>
      <InserForm onSubmit={onSubmit} onClick={onFocus}>
        <Input onChange={onChange} value={value} ref={searchInput} placeholder="영화 제목을 입력하세요" />
        <InsertBtn type="submit"><FiSearch /></InsertBtn>
      </InserForm>
    </>
  );
}