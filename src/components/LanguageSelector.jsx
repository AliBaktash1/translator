import React from 'react';

const LanguageSelector = () => {
  return (
    <select name="languages" id="languages" className='px-5 py-2 border rounded-3xl'>
      <option value="" disabled selected>انتخاب زبان</option>
      <option value="english">english</option>
      <option value="persian">persian</option>
      <option value="russian">russian</option>
      <option value="arabic">arabic</option>
    </select>
  );
};

export default LanguageSelector;
