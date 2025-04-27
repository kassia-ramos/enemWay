import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Simulacoes = () => {
  const [simulacoes, setSimulacoes] = useState([]);

  useEffect(() => {
    api.get('simulacoes/')
      .then(response => {
        setSimulacoes(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar simulações:', error);
      });
  }, []);

  return (
    <div>
      <h1>Simulações</h1>
      {simulacoes.length > 0 ? (
        <ul>
          {simulacoes.map(simulacao => (
            <li key={simulacao.id}>
              {simulacao.usuario?.username} - Redação: {simulacao.redacao}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma simulação encontrada.</p>
      )}
    </div>
  );
};

export default Simulacoes;
