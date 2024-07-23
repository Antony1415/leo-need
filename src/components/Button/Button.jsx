import React from 'react'
import "./Button.css"

const Button = ({ type, className, children }) => {
  switch (type) {
    case 'glowing':
      return (
        <button className={`${className} relative w-fit px-[39px] py-[17px] rounded-[10px] bg-[#020B59] shadow-[0_0_26px_0_rgba(132,248,255,1)] overflow-hidden`} onClick={() => { alert('Button Clicked') }}>
          <span className='Button_Glowing' />
          <span className='Button_Glowing' />
          <span className='Button_Glowing' />
          <span className='Button_Glowing' />
          
          {children}
        </button>
      );

    default:
      return (
        <button className={`${className} flex gap-[15px] px-[10px] py-[9px] h-fit`} onClick={() => { alert('Button Clicked') }}>
          {children}
        </button>
      );
  }
}

export default Button