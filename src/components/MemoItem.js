import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MemoDispatchContext } from '../App';

const MemoItem = ({ id, text, date }) => {
  // const {onRemove} = useContext(MemoDispatchContext);
  const navigate = useNavigate();
  // const handleRemove = () => {

  // }

  const goDetail = () => {
    navigate(`/page/${id}`);
  };

  return (
    <MemoItemBox onClick={goDetail}>
      <MemoDate>{new Date(date).toLocaleDateString()}</MemoDate>
      <MemoText>{text.slice(0, 25)}</MemoText>
      {/* <button
        onClick={handleRemove}
      >×</button> */}
    </MemoItemBox>
  );
};

export default MemoItem;

const MemoItemBox = styled.div`
  max-width: 13vw;
  border: 2px solid rgb(228, 243, 228);
  border-radius: 20px;
  margin: 9px;
  padding: 13px;
  box-sizing: border-box;
  text-align: left;
  background-color: rgb(226, 240, 226);
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: rgb(220, 232, 220);
  }
`
const MemoDate = styled.div`
  font-size: 12px;
  color: gray;
  margin-bottom: 5px;
`

const MemoText = styled.div`
  font-size: 14px;
`