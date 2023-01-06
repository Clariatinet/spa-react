import React from 'react';
import CustomButton from './CustomButton';

const User = ({ user, handleDelete }) => {
  return (
    <div>
      {user.age}살 - {user.name}
      <CustomButton
        color={'red'}
        onClick={() => {
          handleDelete(user.id);
        }}
      >
        삭제하기
      </CustomButton>
    </div>
  );
};

export default User;
