import {AiOutlineStar, AiFillDelete} from "react-icons/ai"

const TodoItem = ({
  id,
  text,
  completed,
  important,
  onDelete,
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
        onClick={()=>onDelete(id)}
      />
    </div>
  )
}

export default TodoItem;