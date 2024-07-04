import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask, toggleTask } from "../redux/actions";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task.text);
  const dispatch = useDispatch();

  const handleEditTask = () => {
    if (newTask.trim()) {
      dispatch(editTask(task.id, newTask));
      setIsEditing(false);
    }
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <>
          <input
            className={`${isEditing && "edit-text"}`}
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleEditTask()}
          />
        </>
      ) : (
        <span onClick={() => dispatch(toggleTask(task.id))}>{task.text}</span>
      )}
      <div className="tasks-actions">
        <button onClick={() => dispatch(deleteTask(task.id))}>
          <MdDelete />
        </button>
        {isEditing ? (
          <button onClick={handleEditTask}>
            <TiTick />
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)}>
            <MdEdit />
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
