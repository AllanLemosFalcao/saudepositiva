// src/components/Sidebar.jsx

import React from 'react';
// Importe os ícones aqui
import { MdDashboard, MdAccountCircle } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import { TbReport } from 'react-icons/tb';

// Importe o CSS da sidebar (ou mova os estilos da sidebar para cá)
import './Sidebar.css'; 

export function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-logo">
        SAÚDE POSITIVA
      </div>
      <ul className="sidebar-nav">
        <li>
          <a href="/dashboard"> {/* Use links de rota, ex: /dashboard */}
            <MdDashboard />
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/pacientes">
            <FaUserFriends />
            <span>Pacientes</span>
          </a>
        </li>
        <li className="active"> {/* (Você vai querer gerenciar isso dinamicamente com o Router depois) */}
          <a href="/relatorios">
            <TbReport />
            <span>Relatórios</span>
          </a>
        </li>
        <li>
          <a href="/conta">
            <MdAccountCircle />
            <span>Conta</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}