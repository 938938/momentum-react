import { RiTodoLine, RiStickyNoteLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderDiv>
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
      <HeaderName className='headerName'>Todo!</HeaderName>
    </HeaderDiv>
  );
};

export default Header;

const HeaderDiv = styled.div`
  height: 5%;
  min-height: 40px;
  line-height: 5%;
  display: flex;
  padding: 10px 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgb(219, 219, 219);
`
const HeaderName = styled.h2`
  width: 100%;
  padding-right: 100px;
  margin-top: 15px;
`