import React from 'react';

const Child = ({ grandFatherName, setName }) => {
  return (
    <div>
      <button
        onClick={() => {
          grandFatherName.setName('박할아');
        }}
      >
        할아버지 이름 바꾸기
      </button>
      <div>{setName.grandFatherName}</div>
    </div>
  );
};

export default Child;
