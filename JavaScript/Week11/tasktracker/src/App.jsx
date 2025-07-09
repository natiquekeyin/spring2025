import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";
import UEffect from "./components/Temp/UEffect";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's appointment",
      day: "July 10,2025 at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Parent teacher's meeting",
      day: "July 17,2025 at 1:30pm",
      reminder: false,
    },
    {
      id: 3,
      text: "GYM",
      day: "August 6,2025 at 2:30pm",
      reminder: false,
    },
  ]);
  const [showAddTask, setShowAddTask] = useState(false);
  // Delete task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder

  const toggleReminder = (id) => {
    console.log("toggle working");
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // To add a new task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;

    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {/* {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show!!!"
      )} */}
      <UEffect />
    </div>
  );
}

export default App;
