const MemoButton = ({ text1, text2, type1, type2, onClick1, onClick2 }) => {
  return (
    <div style={styles.MemoButton}>
      <button className={['MemoButton_left', `MemoButton_${type1}`].join(' ')} onClick={onClick1}>
        {text1}
      </button>
      <button className={['MemoButton_right', `MemoButton_${type2}`].join(' ')} onClick={onClick2}>
        {text2}
      </button>
    </div>
  );
};

MemoButton.defaultProps = {
  type: 'default',
};