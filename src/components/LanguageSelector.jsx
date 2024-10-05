import React from 'react';

const LanguageSelector = ({ selectedLanguage, setSelectedLanguage }) => {
  return (
    <select 
      name="languages" 
      id="languages" 
      value={selectedLanguage} 
      onChange={(e) => setSelectedLanguage(e.target.value)}
      className='px-5 py-2 border rounded-3xl'
    >
      <option value="" disabled>انتخاب زبان</option>
      <option value="af">Afrikaans</option>
      <option value="sq">Albanian</option>
      <option value="am">Amharic</option>
      <option value="ar">Arabic</option>
      <option value="hy">Armenian</option>
      <option value="az">Azerbaijani</option>
      <option value="bn">Bengali</option>
      <option value="bg">Bulgarian</option>
      <option value="ca">Catalan</option>
      <option value="zh-CN">Chinese (Simplified)</option>
      <option value="zh-TW">Chinese (Traditional)</option>
      <option value="hr">Croatian</option>
      <option value="cs">Czech</option>
      <option value="da">Danish</option>
      <option value="nl">Dutch</option>
      <option value="en">English</option>
      <option value="eo">Esperanto</option>
      <option value="fi">Finnish</option>
      <option value="fr">French</option>
      <option value="de">German</option>
      <option value="el">Greek</option>
      <option value="he">Hebrew</option>
      <option value="hi">Hindi</option>
      <option value="hu">Hungarian</option>
      <option value="is">Icelandic</option>
      <option value="id">Indonesian</option>
      <option value="it">Italian</option>
      <option value="ja">Japanese</option>
      <option value="ko">Korean</option>
      <option value="fa">Persian (Farsi)</option>
      <option value="pl">Polish</option>
      <option value="pt">Portuguese</option>
      <option value="ru">Russian</option>
      <option value="es">Spanish</option>
      <option value="sv">Swedish</option>
      <option value="th">Thai</option>
      <option value="tr">Turkish</option>
      <option value="uk">Ukrainian</option>
      <option value="vi">Vietnamese</option>
    </select>
  );
};

export default LanguageSelector;