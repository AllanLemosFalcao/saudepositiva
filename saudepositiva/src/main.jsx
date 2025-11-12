// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './index.css'; // Seu CSS global

// 1. Importe seu layout e suas páginas
import { MainLayout } from './components/MainLayout';
import RelatorioPage from './components/RelatorioPage';
// import DashboardPage from './components/DashboardPage'; // (Página de exemplo)
// import PacientesPage from './components/PacientesPage'; // (Página de exemplo)

// 2. Crie os "routes" (rotas)
const router = createBrowserRouter([
  {
    path: "/", // A rota raiz
    element: <MainLayout />, // Usa o MainLayout como base
    children: [ // E aninha as páginas dentro dele
      // {
      //   path: "dashboard", // URL: /dashboard
      //   element: <DashboardPage />,
      // },
      {
        path: "relatorios", // URL: /relatorios
        element: <RelatorioPage />,
      },
      // {
      //   path: "pacientes", // URL: /pacientes
      //   element: <PacientesPage />,
      // },
    ],
  },
]);

// 3. Renderize o <RouterProvider> em vez do <App>
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);