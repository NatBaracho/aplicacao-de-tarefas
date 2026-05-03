import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';

const Home = () => {
  const { tasks, removeTask, toggleTask } = useContext(TaskContext);

  return (
    <div className="page-container">
      <header className="home-header">
        <h1>Minhas Tarefas</h1>
        <Link to="/add-task" className="btn-primary"> + Adicionar</Link>
      </header>

      {tasks.length === 0 ? (
        <p className="empty-msg">Nenhuma tarefa por aqui ainda...</p>
      ) : (
        <ul className="task-list">
          {tasks.map(task => (
            <li key={task.id} className={task.completed ? 'completed' : ''}>
              <div className="task-info">
                <input 
                  type="checkbox" 
                  checked={task.completed} 
                  onChange={() => toggleTask(task.id)} 
                />
                <span>{task.title}</span>
              </div>
              <div className="task-actions">
                <button onClick={() => removeTask(task.id)} className="btn-delete">Excluir</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;