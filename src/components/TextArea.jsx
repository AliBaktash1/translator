import React from 'react';

const Textarea = ({ placeholder }) => {
  return (
    <textarea
      rows="8"
      className='md:w-[45vw] w-[80vw] border rounded-lg'
      placeholder={placeholder}
    ></textarea>
  );
};

export default Textarea;
