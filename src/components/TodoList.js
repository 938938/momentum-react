import TodoItem from "./TodoItem";

const TodoList = ({todolist, onRemove, onCompleted,onImportant}) => {
  return(
    <div className="TodoList">
      <div>
        {todolist.map((it)=>
          <TodoItem
            key = {it.id}
            {...it}
            onRemove={onRemove}
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