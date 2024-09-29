import React from 'react';

const Button = ({ label }) => {
  return (
    <button className='bg-black text-white px-5 py-2 rounded-lg mt-3'>
      {label}
    </button>
  );
};

export default Button;
