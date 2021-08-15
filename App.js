import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/addTask';

import  { useState } from 'react'
import './App.css';




function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  
  
  const [tasks, setTasks] = useState([{

    id: 1,
    text: 'Working Out',
    day: '04 July 2021',
    reminder: true,

},
{
    id: 2,
    text: 'Cleaning the house',
    day: '04 July 2021',
    reminder: true, 
},
{
    id: 3,
    text: 'Seeing Someone <3',
    day: '14 August 2021',
    reminder: true,
},
])


//Add Tasks
const addTask = (task) =>{
  const id = Math.floor(Math.random()* 1000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

// delete task

const deleteTask = (id) => {

  //filter so it looks at the id and if Id is not id then only show them
  setTasks(tasks.filter((task)=> task.id !== id))

}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder}: task))
}

  return (
    //if no tasks showing then show 'no Tasks to Show'
    <div className="container">
      <Header onAdd= {() => setShowAddTask
      (!showAddTask)} showAddTask = {showAddTask}  />

      {showAddTask && <AddTask onAdd = {addTask}/>}

      {tasks.length > 0 ? (<Tasks tasks={tasks}

      onDelete = {deleteTask} onToggle = {toggleReminder} /> )
      : 
      ('No Tasks to Show')}
      
     
    </div>
  );
}

export default App;
