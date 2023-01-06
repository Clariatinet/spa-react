import React from 'react';
import Child from './Child';

const Mother = ({ grandFatherName, setName }) => {
  return (
    <div>
      <Child grandFatherName={grandFatherName} setName={setName} />
    </div>
  );
};

export default Mother;
