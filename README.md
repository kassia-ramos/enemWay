# EnemWay (Em desenvolvimento)

### Sistema web informativo sobre o Exame Nacional de Ensino Médio (ENEM).

## Sobre o projeto: 

<p align="justify">
🧠 EnemWay
O EnemWay é uma plataforma web informativa sobre o ENEM e os principais programas de acesso ao ensino superior no Brasil, como SISU, PROUNI e FIES. Além de fornecer informações detalhadas, o sistema conta com um simulador de notas e um sistema de cadastro e login de usuários.
</p>

## Funcionalidades:

- Informações sobre programas educacionais (ENEM, SISU, PROUNI, FIES).
- Simulador de Nota do ENEM (em desenvolvimento)
- Cadastro/Login de usuários.
- Painel do usuário (histórico de simulações, cursos).
- Notícias e atualizações sobre o ENEM. (atualizações futuras)

## Tecnologias Utilizadas

### Backend (Django + Django REST Framework)

- Django 5
- Django REST Framework
- SQLite como banco de dados
- Autenticação com JWT (SimpleJWT)

### Frontend (React.js)
- React com Vite
- React Router DOM
- Material UI (MUI)
- Axios para requisições HTTP

### Containers
- Docker
- Docker Compose

## Como Rodar Localmente
### Pré-requisitos:
- Git
- Docker e Docker Compose instalados;

### Clone o Repositório
- git clone https://github.com/kassia-ramos/enemway.git
- cd enemway
- docker-compose up --build
- Acesse o frontend no navegador: http://localhost:3000
- A API backend está disponível em: http://localhost:8000