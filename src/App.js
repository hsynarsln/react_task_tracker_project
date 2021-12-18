import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';
import UpdateTask from './components/UpdateTask';

function App() {
  const [tasks, setTasks] = useState([]);

  //* EDIT
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState('');

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
    setShowAddTask(false);
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

  //! TOGGLE DONE WITH FETCH
  // const toggleDone = async toggleDoneId => {
  //   const res = await fetch(`${baseUrl}/${toggleDoneId}`);
  //   const data = await res.json();
  //   // console.log(data);
  //   const updatedTask = { ...data, isDone: !data.isDone };
  //   // console.log(updatedTask);

  //   //? PUT
  //   await fetch(`${baseUrl}/${toggleDoneId}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(updatedTask)
  //   });
  //   fetchTasks();
  // };

  //! TOGGLE DONE WITH AXIOS
  const toggleDone = async toggleDoneId => {
    const { data } = await axios.get(`${baseUrl}/${toggleDoneId}`);
    const updatedTask = { ...data, isDone: !data.isDone };

    //?Put
    await axios.put(`${baseUrl}/${toggleDoneId}`, updatedTask);
    fetchTasks();
  };

  //! TOGGLE DONE
  // const toggleDone = toggleDoneId => {
  //   setTasks(tasks.map(task => (task.id === toggleDoneId ? { ...task, isDone: !task.isDone } : task)));
  // };

  //! SHOW ADD TASK
  const toggleShow = () => {
    setShowAddTask(!showAddTask);
    if (isEditing === true) {
      setIsEditing(false);
    }
  };

  //!GET TASK WITH ID
  const getTaskWithId = async editTaskId => {
    setEditingId(editTaskId);
    const { data } = await axios.get(`${baseUrl}/${editTaskId}`);
    // console.log(data);
    toggleShow();
    const { text, day } = data;
    // console.log(text);
    // console.log(day);
    setText(text);
    setDay(day);
    setIsEditing(!isEditing);
  };

  //! EDIT TASK
  const editTask = async updateTask => {
    await axios.put(`${baseUrl}/${editingId}`, updateTask);
    fetchTasks();
    setIsEditing(false);
    setShowAddTask(false);
  };

  return (
    <div className='container'>
      <Header title='TASK TRACKER' showAddTask={showAddTask} toggleShow={toggleShow} />

      {showAddTask && !isEditing && <AddTask addTask={addTask} />}
      {isEditing && <UpdateTask editText={text} editDay={day} editTask={editTask} />}

      {/* //* useState'de tanımladığımız taskları Tasks componenete yolluyoruz. */}
      {/* //? task'ların length'i 0'dan büyük ise Tasks componentini göster küçük ise p tagi */}
      {tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} getTaskWithId={getTaskWithId} toggleDone={toggleDone} /> : <p style={{ textAlign: 'center' }}>NO TASK TO SHOW</p>}
    </div>
  );
}

export default App;
