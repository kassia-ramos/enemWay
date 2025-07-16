import React from 'react';
import NavbarAut from '../components/NavbarAut';
import '../styles/sisu.css'; 

function SISU() {
  return (
    <>
    <NavbarAut />
    <div className="sisu-container">
      <h1>O que é o SISU?</h1>
      
      <section className="sisu-section">
        <p>O Sistema de Seleção Unificada (SISU) é um programa do Governo Federal brasileiro criado pelo Ministério da Educação (MEC) para democratizar o acesso às instituições públicas de ensino superior no país.</p>
        <p>Por meio do SISU, os estudantes que realizaram o Exame Nacional do Ensino Médio (ENEM) têm a oportunidade de disputar vagas em universidades públicas e institutos federais.</p>
        <p>A seleção é feita com base na média das notas obtidas no ENEM, respeitando o limite de vagas disponíveis para cada curso e modalidade de concorrência. A seleção considera as escolhas dos candidatos inscritos, bem como seus perfis social e econômico, conforme as disposições da Lei de Cotas (Lei nº 12.711, de 29 de agosto de 2012). </p>

      </section>

      <section className="sisu-section">
        <h1>Como funciona?</h1>
        <p>A inscrição no Sisu é gratuita e é realizada após a divulgação dos resultados do Exame Nacional do Ensino Médio (Enem), no site de Acesso Único Sisu, no botão “Inscreva-se”, em “Período de Inscrições”, na parte de Cronograma do Sisu; ou acessando a página sisualuno.mec.gov.br. Para isso, é necessário ter uma conta registrada no gov.br. </p>
        <p>Durante a inscrição, o candidato deverá preencher os questionários de Perfil Social e de Perfil Econômico relativos ao perfil para a Lei de Cotas (Lei nº 12.711, de 29 de agosto de 2012) e selecionar até duas opções de cursos dentre aqueles oferecidos no respectivo processo seletivo do Sisu. As opções de curso podem ser alteradas durante todo o período de inscrições, sendo considerada válida a última inscrição registrada no sistema.</p>      
        <p>Candidatos que não forem selecionados em nenhuma das duas opções de curso indicadas poderão ainda disputar uma vaga por meio da lista de espera do Sisu.</p>
      </section>

      <section className="sisu-section">
        <h1>Quem pode participar?</h1>
        <p>Todos os candidatos que participaram da edição mais recente do Exame Nacional do Ensino Médio (Enem), anterior ao processo seletivo do Sisu, que obtiveram nota superior a zero na prova de redação e que não declararam estar na condição de treineiro no momento da inscrição do Enem, estão aptos a participar do processo seletivo.</p>
      </section>
    </div>
    </>
  );
}

export default SISU;