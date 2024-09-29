import React from 'react';
import logo from '../assets/Logo.png';

const Footer = () => {
  return (
        <footer className='absolute bottom-1 md:bottom-2 left-0 right-0 mt-10'>
     <hr className="" />
     <p className='text-center p-1'> <img src={logo} alt="" className='inline-block w-6 h-6 ml-4' />ساخته شده در <span><a href="" className="text-blue-600">استارکوچ</a></span></p>
   </footer>

  );
};

export default Footer;
