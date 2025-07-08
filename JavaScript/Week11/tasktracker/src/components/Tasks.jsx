import Task from "./Task";
const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
};
export default Tasks;

// Unless we use Redux!, we usually take our all state variables and define them in App.js (to make them global, so that they can be passed to any component needed)
