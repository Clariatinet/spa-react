import React, { useState } from 'react';
import CustomButton from './components/CustomButton';
import User from './components/User';

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      age: 30,
      name: '송중기',
    },
    {
      id: 2,
      age: 24,
      name: '송김',
    },
    {
      id: 3,
      age: 21,
      name: '김유정',
    },
    {
      id: 4,
      age: 29,
      name: '구교환',
    },
  ]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const handleAddUser = () => {
    const newUser = {
      id: users.length + 1,
      age: age,
      name: name,
    };
    setUsers([...users, newUser]);
  };
  const handleDeleteUser = (id) => {
    const newUserList = users.filter((user) => user.id !== id);
    setUsers(newUserList);
  };
  return (
    <div>
      {users.map((user) => {
        return (
          <User
            handleDelete={handleDeleteUser}
            user={user}
            key={user.id}
          ></User>
        );
      })}
      <input
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        type='text'
        placeholder='이름을 입력해주세요'
      />
      <input
        value={age}
        onChange={(event) => {
          setAge(event.target.value);
        }}
        type='text'
        placeholder='나이를 입력해주세요'
      />
      <CustomButton color={'green'} onClick={handleAddUser}>
        추가하기
      </CustomButton>
    </div>
  );
};

export default App;
