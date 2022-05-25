const TodoList = ({todolist}) => {
  console.log(todolist);
  return(
    <div className="TodoList">
      투두리스트
      <p>할 일이 {todolist.length}개 있습니다</p>
      <div>
        {todolist.map((it)=>
          <div>
            {it.text}
          </div>
        )}
      </div>
    </div>
  )
}

export default TodoList;