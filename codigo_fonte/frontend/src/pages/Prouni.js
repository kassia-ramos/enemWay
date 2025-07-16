import React from 'react';
import NavbarAut from '../components/NavbarAut';
//import '../styles/prouni.css'; 

function Prouni() {
  return (
    <>
    <NavbarAut />
    <div className="enem-container">
      <h1>O que é o Prouni?</h1>
      
      <section className="prouni-section">
        <p>O Programa Universidade Para Todos (Prouni) oferta bolsas de estudo, integrais e parciais (50% do valor da mensalidade do curso), em cursos de graduação e sequenciais de formação específica, em instituições de educação superior privadas. O público-alvo do programa é o estudante sem diploma de nível superior.</p>
      </section>

      <section className="prouni-section">
        <h1>Como se Inscrever?</h1>
        <p>Para se inscrever é preciso ter realizado pelo menos uma das duas últimas edições do Enem, realizada antes do processo seletivo, e ter alcançado, no mínimo, 450 pontos de média nas notas das cinco provas do exame. Além disso, o estudante não pode ter tirado zero na prova de redação do Enem e nem ter participado do exame na condição de treineiro.</p>
      </section>
      <section className="prouni-section">
        <h1>Quem pode participar?</h1>
        <p>O candidato pré-selecionado deve comprovar renda familiar bruta mensal, por pessoa, de até 1,5 salário mínimo, para obter a bolsa integral, que cobre a totalidade do valor da mensalidade do curso. Já para a bolsa parcial, que cobre (50%) do valor da mensalidade, a renda mensal per capita exigida é de até 3 salários mínimos.</p>

      </section>
    </div>
    </>
  );
}

export default Prouni;
