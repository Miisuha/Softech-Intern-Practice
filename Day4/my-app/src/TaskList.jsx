import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = ({
  tasks,
  onTaskToggle,
  onAddTask,
  onClearCompleted,
  onUpdateTaskText,
  onFinishEditing
}) => {
  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <div className="tasklist">
      <h3>Task List</h3>
      <p>{completedCount} of {tasks.length} tasks completed</p>

      <div className="task-items">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            isEditing={task.isEditing}
            onToggle={() => onTaskToggle(task.id)}
            onTextChange={onUpdateTaskText}
            onFinishEditing={onFinishEditing}
          />
        ))}
      </div>

      <div className="button-group">
        <button className="btn add-btn" onClick={onAddTask}>Add Task</button>
        <button className="btn clear-btn" onClick={onClearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
};

export default TaskList;
