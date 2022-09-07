import { useContext } from 'react';
import styled from 'styled-components';
import { TodoStateContext } from '../pages/Main';

const TodoHeader = () => {
  const todolist = useContext(TodoStateContext);
  return (
    <TodoHeaderBox>
      <TodoLength>
        할 일이 <LengthSpan>{todolist.filter((it) => !it.completed).length}</LengthSpan>개 있습니다
      </TodoLength>
    </TodoHeaderBox>
  );
};

export default TodoHeader;

const TodoHeaderBox = styled.div`
  height: 10%;
  min-height: 40px;
`
const TodoLength = styled.div`
  font-size: 15px;
  margin: 0;
  text-align: right;
  padding-right: 50px;
  color: rgb(173, 173, 173);
`

const LengthSpan = styled.span`
  color: black;
  text-decoration: underline;
  font-size: 17px;
`