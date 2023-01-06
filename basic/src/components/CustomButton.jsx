import React from 'react';

const CustomButton = (props) => {
  const { color, onClick, children } = props;
  if (color) {
    return (
      <button
        style={{ backgroundColor: color, color: 'white' }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

export default CustomButton;
