// import React from 'react'
import { FaEdit, FaTimesCircle } from 'react-icons/fa';

const Task = ({ task, deleteTask, toggleDone, getTaskWithId }) => {
  return (
    <div className={`task ${task.isDone ? 'done' : ''}`} onDoubleClick={() => toggleDone(task.id)}>
      <h3>
        {task.text}
        <FaTimesCircle style={{ color: 'red', fontSize: '1.5rem' }} onClick={() => deleteTask(task.id)} />
      </h3>
      <p style={{ display: 'flex', justifyContent: 'space-between' }}>
        {task.day}
        <FaEdit style={{ color: 'blue', fontSize: '1.5rem' }} onClick={() => getTaskWithId(task.id)} />
      </p>
    </div>
  );
};

export default Task;
