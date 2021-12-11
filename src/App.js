import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Study React Pre-Class Notes',
      day: 'Dec 12th at 2:30pm',
      isDone: false
    },
    {
      id: 2,
      text: 'Feed the Dog',
      day: 'Dec 13th at 1:30pm',
      isDone: true
    },
    {
      id: 3,
      text: 'Attend In-Class',
      day: 'Dec 14th at 3:00pm',
      isDone: false
    }
  ]);

  //? butona bastığımızda formun toggle olması
  const [showAddTask, setShowAddTask] = useState(false);

  //! ADD TASK
  const addTask = newTask => {
    // console.log('Add Task From App.js');
    const id = Math.floor(Math.random() * 100) + 1; //? new Task için id oluşturuyoruz

    const addNewTask = { id, ...newTask }; //? yeni taskımıza id ekliyoruz

    setTasks([...tasks, addNewTask]);
  };

  //! DELETE TASK
  const deleteTask = deletedTaskId => {
    // console.log('delete', deletedTaskId);
    //* DELETE YAPMAK İÇİN GENELLİKLE FILTER METODU KULLANIYORUZ
    setTasks(tasks.filter(task => task.id !== deletedTaskId));
  };

  //! TOGGLE DONE
  const toggleDone = toggleDoneId => {
    setTasks(tasks.map(task => (task.id === toggleDoneId ? { ...task, isDone: !task.isDone } : task)));
  };

  //! SHOW ADD TASK
  const toggleShow = () => {
    setShowAddTask(!showAddTask);
  };

  //!DELETE ALL TASKS

  return (
    <div className='container'>
      <Header title='TASK TRACKER' showAddTask={showAddTask} toggleShow={toggleShow} />

      {showAddTask && <AddTask addTask={addTask} />}

      {/* //* useState'de tanımladığımız taskları Tasks componenete yolluyoruz. */}
      {/* //? task'ların length'i 0'dan büyük ise Tasks componentini göster küçük ise p tagi */}
      {tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone} /> : <p style={{ textAlign: 'center' }}>NO TASK TO SHOW</p>}
    </div>
  );
}

export default App;
