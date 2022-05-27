import React from 'react'
import {AiOutlineStar, AiFillDelete} from "react-icons/ai"

const TodoItem = ({
  id,
  text,
  completed,
  important,
  onRemove,
  onCompleted,
  onImportant
}) => {
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