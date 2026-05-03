import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, updateTask } = useContext(TaskContext);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const taskToEdit = tasks.find(t => t.id === id);
    if (taskToEdit) setTitle(taskToEdit.title);
  }, [id, tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(id, title);
    navigate('/');
  };

  return (
    <div className="page-container">
      <h2>Editar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
};

export default EditTask;