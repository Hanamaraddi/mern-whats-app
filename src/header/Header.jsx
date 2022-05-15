import React from 'react';
import "./Header.css";

function Header() {
  return (
    <div className='header'>
           <div className='headerTitles'>
               <span className='headerTitleSm'>
                   React & Node
               </span>

               <span className='headerTitleLg'>
                   Blog
               </span>
           </div>
           <img className='headerImg'
               src='https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q='
               alt=''
           />
    </div>
  )
}

export default Header