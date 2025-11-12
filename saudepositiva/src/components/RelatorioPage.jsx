// src/components/RelatorioPage.jsx

import React from 'react';
import './RelatorioPage.css'; 

// Importe os ícones que SÓ esta página usa
import { FiAlertTriangle } from 'react-icons/fi';
import { FaBold, FaItalic, FaUnderline, FaListUl, FaListOl } from 'react-icons/fa';

// 1. Não precisamos mais importar a imagem.
// const chartImageUrl = '...'; (Usaremos seu link diretamente)

function RelatorioPage() {
  // Retorne um fragmento, pois o container já existe no MainLayout
  return (
    <> 
      {/* --- Cabeçalho --- */}
      <header className="header">
        <h1>Relatório de Avaliação</h1>
        <div className="header-buttons">
          <button className="btn btn-secondary">Exportar PDF</button>
          <button className="btn btn-primary">Assinar Laudo</button>
        </div>
      </header>

      {/* --- Aviso --- */}
      <div className="warning-box">
        <FiAlertTriangle size={20} />
        <span>Ferramenta de apoio. Não substitui avaliação clínica.</span>
      </div>

      {/* --- Resumo Executivo --- */}
      <section className="summary-section">
        <h2>Resumo Executivo (IA)</h2>
        <div className="summary-cards">
          <div className="card">
            <p>Triagem Positiva</p>
          </div>
          <div className="card">
            <p>Sintomas Moderados</p>
          </div>
          <div className="card card-identified">
            <p>1 Identificado</p>
          </div>
        </div>
      </section>

      {/* --- Seção de Dados e Rascunho --- */}
      <section className="data-section">
        {/* --- Coluna da Esquerda: Gráfico --- */}
        <div className="data-visualization card">
          <h3>Visualização de Dados</h3>
          <div className="chart-placeholder">
            {/* 2. Coloque o link direto aqui */}
            <img src="https://i.postimg.cc/rsFdDWL1/Gemini-Generated-Image-j3z4pij3z4pij3z4-1.png" alt="Patient Vital Sign Trends Chart" />
          </div>
        </div>

        {/* --- Coluna da Direita: Rascunho do Laudo --- */}
        <div className="draft-laudo card">
          <h3>Rascunho do Laudo</h3>
          <div className="editor-toolbar">
            <button><FaBold /></button>
            <button><FaItalic /></button>
            <button><FaUnderline /></button>
            <button><FaListUl /></button>
            <button><FaListOl /></button>
          </div>
          <div className="editor-content">
            <p>
              O paciente Carlos Silva, 42 anos, apresenta pontuação sugestiva de
              TDAH no questionário ASRS-18, com destaque para escores elevados
              na subescala de desatenção. A avaliação PHQ-9 indica sintomas
              depressivos de intensidade moderada. Foi identificado um item crítico
              relacionado à ideação suicida, que necessita de investigação aprofundada
              e manejo imediato. Recomenda-se avaliação clinica completa para confirmação
              diagnóstica e elaboração de plano terapêutico.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default RelatorioPage;