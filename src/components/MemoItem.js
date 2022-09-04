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
    <div className="MemoItem" onClick={goDetail}>
      <div className="memodate">{new Date(date).toLocaleDateString()}</div>
      <div className="memotext">{text.slice(0, 25)}</div>
      {/* <button
        onClick={handleRemove}
      >×</button> */}
    </div>
  );
};

export default MemoItem;