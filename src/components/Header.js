import { RiTodoLine, RiStickyNoteLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="Header">
      <RiTodoLine
        className="todo-page pageicon"
        onClick={() => {
          navigate('/');
        }}
      />
      <RiStickyNoteLine
        className="memo-page pageicon"
        onClick={() => {
          navigate('/memo');
        }}
      />
      <h2 className="headerName">Todo!</h2>
    </div>
  );
};

export default Header;
