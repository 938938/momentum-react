import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TodoDispatchContext } from '../pages/Main';

const TodoForm = () => {
  const { onCreate } = useContext(TodoDispatchContext);
  // TodoDispatchContext에서 바로 onCreate를 받아오기
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value < 1) {
      return;
    } // 내용이 입력되지 않았을 경우 onCreate로 전달하지 않고 끝내기
    onCreate(value);
    // onCreate로 value를 전달해서 item으로 만들기
    setValue('');
    // 입력창 초기화
  };

  return (
    <TodoFormBox onSubmit={handleSubmit}>
      <TodoInput
        placeholder="할 일을 입력해주세요"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <TodoButton type="submit">
        추가
      </TodoButton>
    </TodoFormBox>
  );
};

export default React.memo(TodoForm);

const TodoFormBox = styled.form`
  height: 10%;
  min-height: 50px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
`
const TodoInput = styled.input`
  width: 100%;
  min-width: 200px;
  height: 25px;
  padding: 15px;
  border-radius: 4px 0 0 4px;
  border: 1px solid lightblue;
  outline: none;
`

const TodoButton = styled.button`
  width: 20%;
  min-width: 50px;
  height: 57px;
  padding: 10px;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  outline: none;
  background: lightblue;
  color: white;
  white-space: nowrap;
`