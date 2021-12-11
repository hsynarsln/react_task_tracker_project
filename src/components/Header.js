// import React from 'react'
// import PropTypes from "prop-types"

import Button from './Button';

// const Header = (props) => {
const Header = ({ title = 'Task Tracker', toggleShow, showAddTask }) => {
  //? Parent componentten herhangi bir props gelmiyor ise aşağıdaki title alır

  const handleClick = () => {
    console.log('Click with handleClick from header');
  };

  return (
    <header>
      <h1>{title}</h1>
      {/* <h1>{title}</h1> */}

      {/* //? handleClick eventini gönderiyoruz. BestPractice olarak Button.js'e aynı adlı gönderip aynı adla almak gerekir. */}
      <Button color={showAddTask ? 'red' : 'purple'} text={toggleShow ? 'Close Add Task Bar' : 'Show Add Task Bar'} toggleShow={toggleShow} />
    </header>
  );
};

//? Parent componentten herhangi bir props gelmiyor ise aşağıdaki title alır
Header.defaultProps = {
  title: 'Task Tracker'
};

//? parant componentten gelecek olan prop için string olması gerekli gibi
// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default Header;
