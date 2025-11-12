// src/components/MainLayout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom'; // Importa o placeholder
import { Sidebar } from './Sidebar';
import './MainLayout.css'; // Vamos criar este CSS

export function MainLayout() {
  return (
    <div className="page-container">
      <Sidebar />
      <main className="main-content">
        <Outlet /> {/* <-- SUAS PÁGINAS APARECERÃO AQUI */}
      </main>
    </div>
  );
}