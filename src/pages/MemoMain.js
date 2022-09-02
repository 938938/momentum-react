import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MemoList from '../components/MemoList';

const MemoMain = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    const headerName = document.querySelector('.headerName');
    titleElement.innerHTML = `Memo!`;
    headerName.innerHTML = 'Memo!';
  });
  return (
    <MemoMainBox>
      <div>
        <MemoNewButton
          onClick={() => {
            navigate('/new');
          }}
        >
          +
        </MemoNewButton>
      </div>
      <MemoList />
    </MemoMainBox>
  );
};

export default MemoMain;

const MemoMainBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 95%;
`
const MemoNewButton = styled.button`
  background-color: rgb(209, 233, 209);
  border: 0;
  height: 30px;
  font-size: 20px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 20px;
  &:active {
    background-color: rgb(192, 213, 192);
  }
`