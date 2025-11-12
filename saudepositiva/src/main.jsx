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
// (Importe outras páginas aqui quando as criar)
// import DashboardPage from './components/DashboardPage'; 

// 2. Crie os "routes" (rotas)
const router = createBrowserRouter([
  {
    path: "/", // A rota raiz
    element: <MainLayout />, // Usa o MainLayout como base
    children: [ // E aninha as páginas dentro dele
      {
        // Redirecionamento: Se alguém for para "/",
        // leve-o para "/relatorios"
        index: true, 
        element: <RelatorioPage />, // Ou redirecione: <Navigate to="/relatorios" replace />
      },
      {
        path: "relatorios", // URL: /relatorios
        element: <RelatorioPage />,
      },
      // {
      //   path: "dashboard", // URL: /dashboard
      //   element: <DashboardPage />,
      // },
    ],
  },
]);

// 3. Renderize o <RouterProvider>
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
