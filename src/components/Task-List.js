import React, { useState } from 'react';

const TaskList = ({ tasks, deleteTask, toggleTaskCompletion, editTask }) => {
  const [editMode, setEditMode] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editedDueDate, setEditedDueDate] = useState('');

  const handleEdit = (task) => {
    setEditMode(task.id);
    setEditedName(task.title);
    setEditedDescription(task.description);
    setEditedDueDate(task.dueDate);
  };

  const handleSave = (task) => {
    editTask(task.id, editedName, editedDescription, editedDueDate);
    setEditMode(null);
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <div key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
          <div className="task-number">{index + 1}</div>
          <div className="task-title">
            {editMode === task.id ? (
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
            ) : (
              task.title
            )}
          </div>
          <div className="task-description">
            {editMode === task.id ? (
              <textarea
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              />
            ) : (
              task.description
            )}
          </div>
          <div className="task-due-date">
            {editMode === task.id ? (
              <input
                type="text"
                value={editedDueDate}
                onChange={(e) => setEditedDueDate(e.target.value)}
              />
            ) : (
              `Due: ${task.dueDate}`
            )}
          </div>
          <div className="task-actions">
            {editMode === task.id ? (
              <button onClick={() => handleSave(task)}>Save</button>
            ) : (
              <>
                <button onClick={() => toggleTaskCompletion(task.id)}>
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
                <button onClick={() => handleEdit(task)}>Edit</button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
