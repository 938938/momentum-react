import React, { useContext } from 'react'
import {AiOutlineStar, AiFillDelete} from "react-icons/ai"
import { TodoDispatchContext } from '../pages/Main'

const TodoItem = ({
  id,
  text,
  completed,
  important,
}) => {
  const {onRemove, onCompleted, onImportant} = useContext(TodoDispatchContext);
  // useContext를 통해 TodoList를 거치지 않고 바로 데이터를 받아오기

  return(
    <div
      className={completed ? "TodoItem complete" : "TodoItem"}
      style={important ? {background : "cornflowerblue"} : {}}
    >
      <AiOutlineStar
        className="TodoIcon"
        onClick={()=>onImportant(id)}
      />
      <div
        className="TodoText"
        onClick={()=>onCompleted(id)}
      >{text}</div>
      <AiFillDelete
        className="TodoIcon"
        onClick={()=>onRemove(id)}
      />
    </div>
  )
}

export default React.memo(TodoItem);