import { useCallback, useEffect, useReducer, useRef } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const reducer = (state, action) => {
  switch(action.type){
    case 'INIT':{
      return action.data;
    }
    case 'CREATE':{
      const newItem = {
        ...action.data
      }
      return [newItem, ...state]
    }
    case 'REMOVE':{
      return state.filter((it)=>it.id !== action.targetId)
    }
    case 'COMPLETED':{
      return state.map((it)=>
        it.id === action.targetId ? {...it, completed: !it.completed } : it
      )
    }
    case 'IMPORTANT':{
      return state.map((it)=>
        it.id === action.targetId ? {...it, important: !it.important } : it
      )
    }
    default:
      return state;
  }
}

const Main = () => {
  // const [data,setData] = useState([]);

  const [data,dispatch] = useReducer(reducer,[]);
  const dataId = useRef(0);

  const getData = () => {
    dispatch({type:"INIT",data:data})
  };
  useEffect(()=>{
    getData();
  },[])

  const onCreate = useCallback((text) => {
    dispatch({
      type:"CREATE",
      data:{text, id:dataId.current, completed:false, important:false}
    })
    dataId.current += 1;
  },[])

  const onRemove = useCallback((targetId) => {
    dispatch({type:"REMOVE",targetId})
  },[])

  const onCompleted = useCallback((targetId) => {
    dispatch({type:"COMPLETED", targetId})
  },[])

  const onImportant = useCallback((targetId) => {
    dispatch({type:"IMPORTANT",targetId})
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