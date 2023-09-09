import React, { useState } from 'react';

function Task({ task, deleteTask, editTask, completeTask }) {
  const [isEditing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleSave = () => {
    // Save the edited task
    editTask(task.id, editedName, editedDescription);
    setEditing(false);
  };

  return (
    <li className={`task ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className="task-details">
          <strong>{task.title}</strong>
          <p>{task.description}</p>
        </div>
      )}
      <div className="task-actions">
        <button onClick={() => deleteTask(task.id)}>Delete</button>
        {!isEditing && (
          <>
            <button onClick={() => setEditing(true)}>Edit</button>
            <button onClick={() => completeTask(task.id)}>Complete</button>
            <button onClick={handleSave}>Save</button>

          </>
        )}
      </div>
    </li>
  );
}

export default Task;
