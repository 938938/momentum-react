import { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';

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

function Main() {
  const [state, setState] = useState(dummy);

  const addTodo = (text) =>{
    let id = 4;
    if(state.length > 0){ // 이미 state가 존재할 경우, id값을 새롭게 변경
      id = state[0].id + 1;
    }
    let todo = {
      id:id,
      text:text,
      completed: false, // 할일 수행 여부 판단
      important: false, // 중요도 여부 판단
    }
    let newState = [todo, ...state]
    setState(newState)
  }
  const removeTodo = (id) => {
    let updatedState = [...state].filter((todo)=>todo.id !== id)
    setState(updatedState)
  }

  const completeTodo = (id) => {
    let updatedState = state.map((todo)=>{
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setState(updatedState)
  }

  const importantTodo = (id) => {
    let updatedState = state.map((todo)=>{
      if(todo.id === id){
        todo.important = !todo.important
      }
      return todo
    })
    setState(updatedState)
  }
  // let sortedstate = state.sort((a,b)=>b.important - a.important)

  return (
    <div className="Main">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo}/>
      <div className='todo-list'>
        {state.map((todo)=>{
          return(
            <TodoItem
              todo={todo}
              key={todo.id}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
              importantTodo={importantTodo}
            />
          )
        })}
      </div>
    </div>
  );
}

export default Main;