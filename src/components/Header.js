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

      <Button color={showAddTask ? 'red' : 'purple'} text={toggleShow ? 'Close Add Task Bar' : 'Show Add Task Bar'} toggleShow={toggleShow} />
    </header>
  );
};


Header.defaultProps = {
  title: 'Task Tracker'
};



export default Header;
