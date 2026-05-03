import React, { createContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  // Inicializa o estado com uma função para evitar "flash" de conteúdo vazio
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  // Persistência: Salva no LocalStorage sempre que 'tasks' mudar
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    const newTask = {
      id: crypto.randomUUID(), // Gera IDs únicos de forma nativa
      title,
      completed: false
    };
    setTasks(prev => [...prev, newTask]);
  };

  const removeTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const updateTask = (id, updatedTitle) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, title: updatedTitle } : task
    ));
  };

  const toggleTask = (id) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, updateTask, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
};