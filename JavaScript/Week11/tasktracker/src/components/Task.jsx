import { FaApple } from "react-icons/fa";

const Task = ({ task }) => {
  return (
    <div className="task">
      <h3>
        <FaApple style={{ color: "green" }} /> {task.text}
      </h3>
      <p>{task.day}</p>
    </div>
  );
};
export default Task;
