import React from 'react';
import NavbarAut from '../components/NavbarAut';
import '../styles/fies.css'; 

function Fies() {
  return (
    <>
    <NavbarAut />
    <div className="Fies-container">
      <h1>O que é o Fies?</h1>
      
      <section className="fies-section">
        <p>Fundo de Financiamento Estudantil (FIES) é um programa do Ministério da Educação (MEC), instituído pela Lei nº 10.260, de 12 de julho de 2001, que tem como objetivo conceder financiamento a estudantes em cursos superiores não gratuitos, com avaliação positiva no Sistema Nacional de Avaliação da Educação Superior (Sinaes), divulgado pelo Inep/MEC, ofertados por instituições de educação superior privadas que participam do programa.</p>
        <p>Com o Fies Social, instituído pela Resolução nº 58/2024, o MEC retoma o papel social do financiamento estudantil, uma vez que se destina ao atendimento das necessidades de estudantes de baixa renda. Essa versão tem o objetivo principal de oferecer melhores condições para a obtenção do Fies, como a reserva de 50% das vagas, em cada edição do dos processos seletivos do programa e a concessão de até 100% de financiamento dos encargos educacionais para os estudantes inscritos no Cadastro Único para Programas Sociais do Governo Federal (CadÚnico) que possuam renda familiar per capita de até meio salário-mínimo</p>
      </section>

      <section className="enem-section">
        <h1>Como participar?</h1>
        <p>Poderá se inscrever nos processos seletivos do Fies o candidato que, cumulativamente, atenda às seguintes condições:</p>
        <ul>
          <li> tenha participado do Exame Nacional do Ensino Médio - Enem a partir da edição de 2010, com nota no Exame válida até o momento anterior à abertura das inscrições, tenha obtido média aritmética das notas nas 5 (cinco) provas igual ou superior a 450 (quatrocentos e cinquenta) pontos e nota na prova de redação superior a 0 (zero), assim como não tenha participado no referido Exame como "treineiro";</li>
          <li>possua renda familiar mensal bruta per capita de até 3 (três) salários mínimos.</li>
        </ul>
        <p>Compete exclusivamente ao candidato certificar–se de que cumpre os requisitos estabelecidos para concorrer a cada processo seletivo, observadas as vedações previstas em Edital do processo seletivo vigente.</p>
      </section>
    </div>
    </>
  );
}

export default Fies;
