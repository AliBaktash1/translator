import React from 'react'
import Header from '../components/Header'
import LanguageSelector from '../components/LanguageSelector'
import Textarea from '../components/TextArea'
import Footer from '../components/Footer'
import Button from '../components/Button'

const Translator = () => {
  return (
<div>
      <Header/>
      <hr className="bg-slate-500 text-4xl" />
      <main className='md:pt-[10vh] pt-[5vh] px-8 flex flex-col md:flex-row items-center gap-3'>
        <section className="flex flex-col gap-3">
          <section className="flex flex-row gap-3">
            <LanguageSelector/>
            <LanguageSelector />
          </section>
          <Textarea placeholder="متن اصلی" />
          <div>
            <Button label="ترجمه" />
          </div>
        </section>
        <section>
          <Textarea placeholder="ترجمه شده" />
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default Translator
