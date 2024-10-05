import React from 'react';

const Textarea = ({ placeholder, value, onChange }) => {
  return (
    <textarea
      rows="8"
      className='md:w-[45vw] w-[80vw] border rounded-lg'
      placeholder={placeholder}
      value={value}  // Bind the value to the textarea
      onChange={onChange} 
    ></textarea>
  );
};

export default Textarea;
