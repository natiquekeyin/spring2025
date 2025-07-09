import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";
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

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <AddTask />
      {/* {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show!!!"
      )} */}
    </div>
  );
}

export default App;
