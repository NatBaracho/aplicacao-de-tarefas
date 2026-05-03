import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">Gerenciador de Tarefas</Link>
        <div className="nav-links">
          <Link to="/">Início</Link>
          <Link to="/add-task">Nova Tarefa</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;