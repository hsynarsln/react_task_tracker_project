import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  //? butona bastığımızda formun toggle olması
  const [showAddTask, setShowAddTask] = useState(false);

  //! JSON SERVER URL
  const baseUrl = 'http://localhost:5000/tasks';

  //! FETCH TASKS (JSON SERVER)
  // const fetchTasks = async () => {
  //   const res = await fetch(baseUrl);
  //   const data = await res.json();
  //   console.log(data);
  // };
  //! FETCH TASKS WITH AXIOS
  const fetchTasks = async () => {
    // const res = await axios(baseUrl);
    const { data } = await axios(baseUrl);
    // console.log(data);
    setTasks(data);
  };

  //! Uygulama açılır açılmaz verilerimizin gelmesini istiyoruz.
  useEffect(() => {
    fetchTasks();
  }, []);

  //! ADD TASK (JSON SERVER)
  // const addTask = async newTask => {
  //   const res = await fetch(baseUrl, {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(newTask)
  //   });
  //   //* burada fetch yapmamız gerekir. yoksa server'a ekler ama ekrana yansıtmaz
  //   fetchTasks();
  // };

  //! ADD TASK WITH AXIOS
  const addTask = async newTask => {
    await axios.post(baseUrl, newTask);
    fetchTasks();
  };

  //! ADD TASK
  // const addTask = newTask => {
  //   // console.log('Add Task From App.js');
  //   const id = Math.floor(Math.random() * 100) + 1; //? new Task için id oluşturuyoruz

  //   const addNewTask = { id, ...newTask }; //? yeni taskımıza id ekliyoruz

  //   setTasks([...tasks, addNewTask]);
  // };

  //! DELETE TASK FETCH
  // const deleteTask = async deleteTaskId => {
  //   await fetch(`${baseUrl}/${deleteTaskId}`, {
  //     method: 'DELETE'
  //   });
  //   fetchTasks();
  // };

  //! DELETE TASK WITH AXIOS
  const deleteTask = async deleteTaskId => {
    await axios.delete(`${baseUrl}/${deleteTaskId}`);
    fetchTasks();
  };

  //! DELETE TASK
  // const deleteTask = deletedTaskId => {
  //   // console.log('delete', deletedTaskId);
  //   //* DELETE YAPMAK İÇİN GENELLİKLE FILTER METODU KULLANIYORUZ
  //   setTasks(tasks.filter(task => task.id !== deletedTaskId));
  // };

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
