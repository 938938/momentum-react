import { useRef, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Main = () => {
  const [data,setData] = useState([]);
  const dataId = useRef(0);

  const onCreate = (text) => {
    const completed = false;
    const important = false;
    const newItem = {
      text,
      id : dataId.current
    }
    dataId.current += 1;
    setData([newItem, ...data]);
  }

  const onDelete = (targetId) => {
    const newTodoList = data.filter((it)=>it.id !== targetId);
    setData(newTodoList)
  }

  const onCompleted = (targetId) => {
    const newTodoList = data.map((it)=>{
      if(it.id === targetId){
        it.completed = !it.completed
      }
      return it;
    })
    setData(newTodoList)
  }

  const onImportant = (targetId) => {
    const newTodoList = data.map((it)=>{
      if(it.id === targetId){
        it.important = !it.important
      }
      return it;
    })
    setData(newTodoList)
  }

  return(
    <div className="Main">
      <h1>Todo List</h1>
      <div className="TodoLength">
        할 일이 <span>{data.length}</span>개 있습니다
      </div>
      <TodoForm onCreate={onCreate}/>
      <TodoList
        todolist={data}
        onDelete={onDelete}
        onCompleted={onCompleted}
        onImportant={onImportant}
      />
    </div>
  )
}

export default Main;