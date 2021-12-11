// import React from 'react'

const Button = ({ color, text, toggleShow }) => {
  // const handleClick = () => {
  //   console.log('Click with handleClick');
  // };
  //? buttton eventini header.js'de oluşturucaz.(props drilling)

  return (
    <div>
      <button className='btn' style={{ backgroundColor: color }} onClick={toggleShow}>
        {text}
      </button>
    </div>
  );
};

export default Button;
