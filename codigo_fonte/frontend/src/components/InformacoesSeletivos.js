import React from 'react';
import { Link } from 'react-router-dom';

function InformacoesSeletivos() {
  const informacoes = [
    {
      titulo: 'ENEM',
      descricao: 'Entenda como funciona o Exame Nacional do Ensino Médio e como suas notas são calculadas.',
      icone: '📊',
      rota: '/enem'
    },
    {
      titulo: 'SISU',
      descricao: 'Conheça o Sistema de Seleção Unificada e como se candidatar às vagas nas universidades públicas.',
      icone: '🎓',
      rota: '/sisu'
    },
    {
      titulo: 'PROUNI',
      descricao: 'Descubra como conseguir bolsas de estudo em instituições privadas com o Programa Universidade para Todos.',
      icone: '🏫',
      rota: '/prouni'
    },
    {
      titulo: 'FIES',
      descricao: 'Entenda como funciona o Financiamento Estudantil e como ele pode ajudar no seu ingresso no ensino superior.',
      icone: '💰',
      rota: '/fies'
    }
  ];

  return (
    <>
      {informacoes.map((item, index) => (
        <div className="dashboard-card" key={index}>
          <div className="dashboard-icon">{item.icone}</div>
          <h3>{item.titulo}</h3>
          <p>{item.descricao}</p>
          <Link to={item.rota} className="btn-dashboard">
            Saiba mais
          </Link>
        </div>
      ))}
    </>
  );
}

export default InformacoesSeletivos;
