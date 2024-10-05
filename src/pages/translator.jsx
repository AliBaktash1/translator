import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header'
import LanguageSelector from '../components/LanguageSelector'
import Textarea from '../components/TextArea'
import Footer from '../components/Footer'
import Button from '../components/Button'

const Translator = () => {
  

  const [fromLanguage, setFromLanguage] = useState('');
  const [toLanguage, setToLanguage] = useState('');
  const [text, setText] = useState('');
  const [sourceDirection, setSourceDirection] = useState('ltr'); // Direction for source
  const [targetDirection, setTargetDirection] = useState('ltr');
  const [translatedText, setTranslatedText] = useState('');
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleTranslation = async () => {
    console.log("From Language:", fromLanguage);
  console.log("To Language:", toLanguage);
  console.log("Text:", text);
  if (fromLanguage && toLanguage && text) {
    try {
      const response = await axios.post('https://api.translateplus.io/v1/translate', {
        text: text,           // The text you want to translate
        source: fromLanguage,  // Source language
        target: toLanguage     // Target language
      }, {
        headers: {
          'X-API-KEY': '9d7a34aa6d029a120d8b0ff52cd6664f5873194d',  // Replace with your actual API key
          'Content-Type': 'application/json'
        }
      });
  
      // Update the translated text state
      setTranslatedText(response.data.translations.translation);  // Access the 'translation' field from the response
    } catch (error) {
      console.error('Error during translation:', error);
    }
  } else {
    alert('Please select languages and enter text.');
  }
  };
  return (
<div>
      <Header/>
      <hr className="bg-slate-500 text-4xl" />
      <main className='md:pt-[10vh] pt-[5vh] px-8 flex flex-col md:flex-row items-center gap-3'>
        <section className="flex flex-col gap-3">
          <section className="flex flex-row gap-3">
            <LanguageSelector
             selectedLanguage={fromLanguage}
             setSelectedLanguage={setFromLanguage}
             setDirection={setSourceDirection}
            />
            <LanguageSelector
            selectedLanguage={toLanguage}
            setSelectedLanguage={setToLanguage}
            setDirection={setTargetDirection}
            />
          </section>
          <Textarea placeholder="متن اصلی" 
          value={text} onChange={handleInputChange}
          direction={sourceDirection} 
          />
          <div>
            <Button label="ترجمه"  onClick={handleTranslation}/>
          </div>
        </section>
        <section>
          <Textarea placeholder="ترجمه شده" 
          value={translatedText} 
          direction={targetDirection}
          readOnly 
          />
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default Translator
