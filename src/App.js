import React, { useEffect, useState } from 'react';
import './App.css';
import Heading from './components/Heading';
import TaskForm from './components/Task-Form';
import TaskList from './components/Task-List';

function App() {
  const [tasks, setTasks] = useState([]);

  // Define the addTask function to add new tasks
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Define the deleteTask function to delete tasks
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  // Define the editTask function to edit tasks
  const editTask = (taskId, updatedName, updatedDescription) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          title: updatedName,
          description: updatedDescription,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // Define the toggleTaskCompletion function to toggle task completion status
  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <Heading />
      <div className="container">
        <TaskForm addTask={addTask} />
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          editTask={editTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      </div>
    </div>
  );
}

export default App;
