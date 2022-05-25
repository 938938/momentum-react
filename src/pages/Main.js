import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const dummy = [
  {
    id:1,
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
    id:3,
    text:'데이터',
    completed:false,
    important:false,
  }
]

const Main = () => {
  return(
    <div className="Main">
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList todolist={dummy}/>
    </div>
  )
}

export default Main;