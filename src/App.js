import Header from "./components/Header";
import Tasks from "./components/Tasks";
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

//delete task

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id ))
}

  return (
    <div className="container">
      <Header title="Task Note"/>
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} />) 
      : ('No Tasks to show') }
    </div>
  );
}

export default App;
