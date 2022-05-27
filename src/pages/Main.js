import { useCallback, useRef, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Main = () => {
  const [data,setData] = useState([]);
  const dataId = useRef(0);

  const onCreate = useCallback((text) => {
    const completed = false;
    const important = false;
    const newItem = {
      text,
      id : dataId.current,
      completed,
      important
    }
    dataId.current += 1;
    setData((data)=>[newItem, ...data]);
  },[])

  const onRemove = useCallback((targetId) => {
    setData(data => data.filter((it)=>it.id !== targetId))
  },[])

  const onCompleted = useCallback((targetId) => {
    setData(data=>data.map((it)=>{
      if(it.id === targetId){
        it.completed = !it.completed
      }
      return it;
    }))
  },[])

  const onImportant = useCallback((targetId) => {
    setData(data=>data.map((it)=>{
      if(it.id === targetId){
        it.important = !it.important
      }
      return it;
    }))
  },[])

  return(
    <div className="Main">
      <h1>Todo List</h1>
      <div className="TodoLength">
        할 일이 <span>{data.length}</span>개 있습니다
      </div>
      <TodoForm onCreate={onCreate}/>
      <TodoList
        todolist={data}
        onRemove={onRemove}
        onCompleted={onCompleted}
        onImportant={onImportant}
      />
    </div>
  )
}

export default Main;