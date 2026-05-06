import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Providers
import { TaskProvider } from './context/TaskContext';

// Components Globais (Fixos)
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';

// Lazy Loading das Páginas (Otimização de Performance)
const Home = lazy(() => import('./pages/Home'));
const AddTask = lazy(() => import('./pages/AddTask'));
const EditTask = lazy(() => import('./pages/EditTask')); // Página de edição
const NotFound = lazy(() => import('./pages/NotFound'));

/**
 * Estrutura Principal do App
 * Gerencia o roteamento e o estado global das tarefas.
 */
function App() {
  return (
    <TaskProvider>
      <Router>
        {/* O Navbar fica fora do Suspense se você quiser que ele carregue instantaneamente */}
        <Navbar />

        <main className="app-container">
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              {/* Rota Principal: Lista de Tarefas */}
              <Route path="/" element={<Home />} />

              {/* Rota para Criar Tarefa */}
              <Route path="/add-task" element={<AddTask />} />

              {/* Rota Dinâmica para Editar Tarefa (:id é um parâmetro) */}
              <Route path="/edit-task/:id" element={<EditTask />} />

              {/* Rota de Erro 404 - Deve ser sempre a última */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
      </Router>
    </TaskProvider>
  );
}

export default App;