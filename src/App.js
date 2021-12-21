import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import {useState} from 'react'



function App() {
  const [tasks, setTasks] = useState (
    [
        {
            id: 1, 
            text: 'Doctrs Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2, 
            text: 'Metting in School',
            day: 'Feb 6th at 1:30pm',
            reminder: true,
        },
        {
            id: 3, 
            text: 'Food Shopping',
            day: 'Feb 5th at 2:30pm',
            reminder: false,
        }
    ]
)
//add task

const addTask = (task) => {
  console.log(task)
}
//delete task

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id ))
}

//Toggle reminder

const toggleReminder = (id) =>{
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder}:task))
}
  return (
    <div className="container">
      <Header title="Task Note"/>
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) 
      : ('No Tasks to show') }
    </div>
  );
}

export default App;
