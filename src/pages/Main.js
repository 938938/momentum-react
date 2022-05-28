import React, { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

// useReducer에 사용하는 reducer 함수
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

export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

const Main = () => {

  const [data,dispatch] = useReducer(reducer,[]);
  const dataId = useRef(0);

  const getData = () => {
    dispatch({type:"INIT",data:data})
  };
  useEffect(()=>{
    getData();
  },[])
  // localStorage를 사용하게 될 getData 함수

  const onCreate = useCallback((text) => {
    dispatch({
      type:"CREATE",
      data:{text, id:dataId.current, completed:false, important:false}
    }) // 아이템을 생성할 때 필요한 데이터를 전달
    dataId.current += 1;
  },[])

  const onRemove = useCallback((targetId) => {
    dispatch({type:"REMOVE",targetId}) // targetId (이벤트가 발생한 아이템의 id값)을 전달
  },[])

  const onCompleted = useCallback((targetId) => {
    dispatch({type:"COMPLETED", targetId})
  },[])

  const onImportant = useCallback((targetId) => {
    dispatch({type:"IMPORTANT",targetId})
  },[])

  const memoizedDispatches = useMemo(()=>{
    return {onCreate, onRemove, onCompleted, onImportant}
  },[])
  // Main 컴포넌트가 재생성 될 때마다 해당 객체도 재생성이 되게 하지 않기 위해 useMemo 사용

  return(
    <TodoStateContext.Provider value={data}>
      <TodoDispatchContext.Provider value={memoizedDispatches}>
        {/* Provider도 컴포넌트이기 때문에, data와 상태변화함수는 따로 생성하는 것이 좋음(최적화 문제) */}
        <div className="Main">
          <h1>Todo List</h1>
          <div className="TodoLength">
            할 일이 <span>{data.length}</span>개 있습니다
          </div>
          <TodoForm />
          <TodoList />
          {/* Provider으로 직접 전달하기 때문에 TodoForm과 TodoList에 따로 데이터를 전달하지 않아도 됨 */}
        </div>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}

export default Main;