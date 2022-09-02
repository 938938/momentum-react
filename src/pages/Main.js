import React, { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';
import styled from 'styled-components';
import TodoForm from '../components/TodoForm';
import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';

// useReducer에 사용하는 reducer 함수
const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      newState = [action.data, ...state];
      break;
    }
    case 'REMOVE': {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case 'COMPLETED': {
      newState = state.map((it) =>
        it.id === action.targetId ? { ...it, completed: !it.completed } : it,
      );
      break;
    }
    case 'IMPORTANT': {
      newState = state.map((it) =>
        it.id === action.targetId ? { ...it, important: !it.important } : it,
      );
      break;
    }
    default:
      return state;
  }
  localStorage.setItem('todo', JSON.stringify(newState));
  // localStorage에 'todo'라는 key값으로 데이터를 저장
  newState.sort((a, b) => b.important - a.important);
  newState.sort((a, b) => a.completed - b.completed);
  // complete한 아이템은 아래로 내리고, important 체크된 아이템은 위로 재정렬
  return newState;
};

export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

const Main = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    const headerName = document.querySelector('.headerName');
    titleElement.innerHTML = `Todo!`;
    headerName.innerHTML = 'Todo!';
  });

  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(0);

  useEffect(() => {
    const localData = localStorage.getItem('todo');
    if (localData) {
      const todoList = JSON.parse(localData).sort((a, b) => parseInt(b.id) - parseInt(a.id));
      if (todoList.length >= 1) {
        dataId.current = parseInt(todoList[0].id) + 1;
        todoList.sort((a, b) => b.important - a.important);
        todoList.sort((a, b) => a.completed - b.completed);
        // complete한 아이템은 아래로 내리고, important 체크된 아이템은 위로 재정렬
        dispatch({ type: 'INIT', data: todoList });
      }
    }
  }, []);

  const onCreate = useCallback((text) => {
    dispatch({
      type: 'CREATE',
      data: {
        text,
        id: dataId.current,
        completed: false,
        important: false,
      },
    }); // 아이템을 생성할 때 필요한 데이터를 전달
    dataId.current += 1;
  }, []);

  const onRemove = useCallback((targetId) => {
    dispatch({ type: 'REMOVE', targetId }); // targetId (이벤트가 발생한 아이템의 id값)을 전달
  }, []);

  const onCompleted = useCallback((targetId) => {
    dispatch({ type: 'COMPLETED', targetId });
  }, []);

  const onImportant = useCallback((targetId) => {
    dispatch({ type: 'IMPORTANT', targetId });
  }, []);

  const memoizedDispatches = useMemo(() => {
    return { onCreate, onRemove, onCompleted, onImportant };
  }, []);
  // Main 컴포넌트가 재생성 될 때마다 해당 객체도 재생성이 되게 하지 않기 위해 useMemo 사용

  return (
    <TodoStateContext.Provider value={data}>
      <TodoDispatchContext.Provider value={memoizedDispatches}>
        {/* Provider도 컴포넌트이기 때문에, data와 상태변화함수는 따로 생성하는 것이 좋음(최적화 문제) */}
        <MainBox>
          <TodoHeader />
          <TodoForm />
          <TodoList />
          {/* Provider으로 직접 전달하기 때문에 TodoForm과 TodoList에 따로 데이터를 전달하지 않아도 됨 */}
        </MainBox>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export default Main;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
`