import React, { useState } from 'react';

const UpdateTask = ({ editTask, editText, editDay }) => {
  const [text, setText] = useState(editText);
  const [day, setDay] = useState(editDay);

  // console.log(text);
  // console.log(day);

  const onSubmit = e => {
    e.preventDefault();
    // editTask();
    editTask({ text, day, isDone: false });
    setText('');
    setDay('');
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label htmlFor='task'>Task</label>
        <input
          id='task'
          name='text'
          type='text'
          placeholder='AddTask'
          //ref={text}
          required
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='day'>Day & Time</label>
        <input
          id='day'
          name='day'
          type='text'
          placeholder='Add Day & Time'
          //ref={day}
          value={day}
          onChange={e => setDay(e.target.value)}
        />
      </div>
      <input type='submit' value='Update Task' className='btn btn-block' />
    </form>
  );
};

export default UpdateTask;
