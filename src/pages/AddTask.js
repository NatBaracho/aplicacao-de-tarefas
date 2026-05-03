import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const { addTask } = useContext(TaskContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Digite um título!");
    
    addTask(title);
    navigate('/'); // Volta para a home após salvar
  };

  return (
    <div className="page-container">
      <h2>Nova Tarefa</h2>
      <form onSubmit={handleSubmit} className="task-form">
        <input 
          type="text" 
          placeholder="O que precisa ser feito?" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <div className="form-actions">
          <button type="button" onClick={() => navigate('/')}>Cancelar</button>
          <button type="submit" className="btn-save">Salvar Tarefa</button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;