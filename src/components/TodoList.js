import TodoItem from "./TodoItem";

const TodoList = ({todolist, onDelete, onCompleted,onImportant}) => {
  return(
    <div className="TodoList">
      <div>
        {todolist.map((it)=>
          <TodoItem
            key = {it.id}
            {...it}
            onDelete={onDelete}
            onCompleted={onCompleted}
            onImportant={onImportant}
          />
        )}
      </div>
    </div>
  )
}

TodoList.defaultProps={
  todolist:[]
}

export default TodoList;