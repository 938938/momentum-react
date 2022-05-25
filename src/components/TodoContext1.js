import { createContext, useContext, useReducer, useRef } from "react";

const dummy = [
  {
    id:3,
    text:'임시',
    completed:false,
    important:false,
  },
  {
    id:2,
    text:'시작',
    completed:false,
    important:false,
  },
  {
    id:1,
    text:'데이터',
    completed:false,
    important:false,
  }
]

function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw state;
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

const TodoContext = ({children}) => {
  const [state, dispatch] = useReducer(todoReducer, dummy);
  const nextId = useRef(4);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export const useTodoState = () => {
  return useContext(TodoStateContext)
}
export const useTodoDispatch = () => {
  return useContext(TodoDispatchContext)
}

export default TodoContext;