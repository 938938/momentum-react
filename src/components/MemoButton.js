import styled from 'styled-components';

const MemoButton = ({ text1, text2, type1, type2, onClick1, onClick2 }) => {
  return (
    <MemoButtonBox>
      <button className={['MemoButton_left', `MemoButton_${type1}`].join(' ')} onClick={onClick1}>
        {text1}
      </button>
      <button className={['MemoButton_right', `MemoButton_${type2}`].join(' ')} onClick={onClick2}>
        {text2}
      </button>
    </MemoButtonBox>
  );
};

MemoButton.defaultProps = {
  type: 'default',
};

export default MemoButton;

const MemoButtonBox = styled.div`
  height: 30px;
  margin-top: 20px;
  justify-content: center;
  margin: 0 auto;
`