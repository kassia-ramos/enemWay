import React from 'react';
import NavbarAut from '../components/NavbarAut';
import '../styles/enem.css'; 

function Enem() {
  return (
    <>
    <NavbarAut />
    <div className="enem-container">
      <h1>O que é o ENEM?</h1>
      
      <section className="enem-section">
        <p>O Exame Nacional do Ensino Médio (ENEM) é uma avaliação realizada anualmente pelo INEP com o objetivo de medir o desempenho dos estudantes ao final da educação básica. No ano de 2009 o exame foi aperfeiçoado em sua metodologia e passou a ser utilizado como mecanismo de acesso ao ensino superior</p>
        <p>As notas do exame podem ser utilizadas para acesso a Instituições Públicas por meio do Sistema de Seleção Unificada(SISU), Instituições Privadas por meio do Programa Universidade para Todos(ProUni), além de serem aceitas também em Instituições de educação superior portuguesas que possuem acordo com o Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixera(INEP).</p>
        <p>Além de serem aceitas para requerer Financiamento Estudantil(FIES).</p>
        <p>Qualquer estudante ou pessoa que concluiu o Ensino Médio ou ainda está concluindo pode fazer o ENEM para acesso ao ensino superior. Alunos que não conluíram o Ensino Médio ainda podem participar do exame como "treineiros" e os resultados no exame são usados apenas para autoavaliação de conhecimento.</p>
        <p>A aplicação da prova ocorre em dois dias e as provas são de quatro áreas de conhecimento:</p>
        <ul>
          <li>Linguagens, Códigos e suas Tecnologias</li>
          <li>Ciências Humanas e suas Tecnologias</li>
          <li>Ciências da Natureza e suas Tecnologias</li>
          <li>Matemática e suas Tecnologias</li>
        </ul>
        <p>O exame possui diversos recursos de acessibilidade e Inclusão como atendimento especializado, tratamento pelo nome social, além de aplicação para pessoas privadas de liberdade.</p>
      </section>

      <section className="enem-section">
        <h2>Como se Preparar?</h2>
        <p>Acesse o site oficial do Governo Federal sobre o Exame, para ter acesso a Editais, Municípios de Aplicação, ENEM em Libras, Provas e Gabaritos e muitas outras informações a respeito do Exame.</p>
      </section>
    </div>
    </>
  );
}

export default Enem;
