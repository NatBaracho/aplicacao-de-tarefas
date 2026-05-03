import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404</h1>
      <p>Ops! A página que você procura não existe.</p>
      <Link to="/" style={{ color: '#4a90e2', fontWeight: 'bold' }}>
        Voltar para a Home
      </Link>
    </div>
  );
};

export default NotFound;