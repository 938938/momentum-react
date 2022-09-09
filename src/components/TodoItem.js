import React, { useContext } from 'react';
import { AiOutlineStar, AiFillStar, AiFillDelete } from 'react-icons/ai';
import styled from 'styled-components';
import { TodoDispatchContext } from '../pages/Main';

const TodoItem = ({ id, text, completed, important }) => {
  const { onRemove, onCompleted, onImportant } = useContext(TodoDispatchContext);
  // useContext를 통해 TodoList를 거치지 않고 바로 데이터를 받아오기

  return (
    <div
      className={completed ? 'TodoItem complete' : 'TodoItem'}
      style={important ? { background: 'cornflowerblue' } : {}}
    >
      <TodoIcon onClick={() => onImportant(id)}>
        {important ? <AiFillStar /> : <AiOutlineStar />}
      </TodoIcon>
      <TodoText onClick={() => onCompleted(id)}>
        {text}
      </TodoText>
      <AiFillDelete className="TodoIcon" onClick={() => onRemove(id)} />
    </div>
  );
};

export default React.memo(TodoItem);

const TodoIcon = styled.div`
  display: flex;
  align-items: center;
  width: 10vw;
  font-size: 24px;
  cursor: pointer;
`
const TodoText = styled.div`
  cursor: pointer;
  width: 80vw;
  margin: 0;
`