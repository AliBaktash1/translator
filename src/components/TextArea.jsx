import React from 'react';

const Textarea = ({ placeholder, value, direction,onChange }) => {
  return (
    <textarea
      rows="8"
      className='md:w-[45vw] w-[80vw] p-2 border rounded-lg'
      placeholder={placeholder}
      style={{ direction }} 
      value={value}  // Bind the value to the textarea
      onChange={onChange} 
    ></textarea>
  );
};

export default Textarea;
