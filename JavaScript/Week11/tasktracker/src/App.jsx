import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

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
  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
