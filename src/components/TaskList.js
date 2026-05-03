import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const { tasks, removeTask } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <p>Não há tarefas cadastradas.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <span>{task.title}</span>
          <div className="task-actions">
            <Link to={`/edit-task/${task.id}`} className="btn btn-edit">
              Editar
            </Link>
            <button 
              onClick={() => removeTask(task.id)} 
              className="btn btn-delete"
            >
              Excluir
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
