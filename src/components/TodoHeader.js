import { useContext } from "react";
import { TodoStateContext } from "../pages/Main";

const TodoHeader = () => {
  const todolist = useContext(TodoStateContext);
  return(
    <div className="TodoHeader">
      <div className="TodoLength">
        할 일이 <span>{todolist.filter((it)=>!it.completed).length}</span>개 있습니다
      </div>
    </div>
  )
}

export default TodoHeader;