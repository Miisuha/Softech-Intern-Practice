import React from 'react';
import './TaskItem.css';

const TaskItem = ({
  id,
  text,
  completed,
  isEditing,
  onToggle,
  onTextChange,
  onFinishEditing
}) => {
  const handleInputChange = (e) => {
    onTextChange(id, e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onFinishEditing(id);
    }
  };

  return (
    <div className={`task-item ${completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={completed} onChange={onToggle} />

      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          onBlur={() => onFinishEditing(id)}
          onKeyDown={handleKeyPress}
          autoFocus
        />
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};

export default TaskItem;
