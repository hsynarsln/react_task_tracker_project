// import React from 'react'
import Task from './Task';

const Tasks = ({ tasks, deleteTask, toggleDone, getTaskWithId }) => {
  // console.log(tasks);

  return (
    <div>
      {tasks.map(task => (
        // <p key={task.id}>{task.text}</p>
        <Task key={task.id} task={task} deleteTask={deleteTask} toggleDone={toggleDone} getTaskWithId={getTaskWithId} />
      ))}
    </div>
  );
};

export default Tasks;
