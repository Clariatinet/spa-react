import React, { useState } from 'react';
import Mother from './Mother';

const GrandFather = () => {
  const [name, setName] = useState('김할아');
  return (
    <div>
      <Mother grandFatherName={name} setName={setName} />
    </div>
  );
};

export default GrandFather;
