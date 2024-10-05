import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button className='bg-black text-white px-5 py-2 rounded-lg mt-3' onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
