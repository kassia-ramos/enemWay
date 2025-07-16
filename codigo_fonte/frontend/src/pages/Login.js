import React, { useState } from 'react';
import NavbarAut from '../components/NavbarAut';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../services/api'; // certifique-se que o axios está configurado corretamente

function Login() {
  const [username, setUsername] = useState(''); // <-- antes era email
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Primeiro, faz a requisição para obter os tokens
      const response = await api.post('/token/', {
        username: username, // usa username como esperado pelo backend
        password: senha,
      });

      const { access, refresh } = response.data;

      // Salva os tokens localmente
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);

      // Agora, faz requisição autenticada para pegar os dados do usuário
      const userResponse = await api.get('/usuarios/me/', {
        headers: {
          Authorization: `Bearer ${access}`, // passa o token no header Authorization
        },
      });

      const userData = userResponse.data;

      // Salva o nome de usuário (username) no localStorage para usar no dashboard
      localStorage.setItem('username', userData.username);

      // Finalmente, navega para a página do dashboard
      navigate('/dashboard');

    } catch (err) {
      setErro('Usuário ou senha inválidos. Tente novamente.');
      console.error(err);
    }
  };

  return (
    <>
      <NavbarAut />
      <Container maxWidth="xs">
        <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
          <Typography variant="h5" component="h1" gutterBottom >
            Login
          </Typography>
          <form onSubmit={handleLogin} style={{ width: '100%' }}>
            <TextField
              label="Nome de Usuário"
              type="text"
              fullWidth
              margin="normal"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField 
              label="Senha"
              type="password"
              fullWidth
              margin="normal"
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Entrar
            </Button>
          </form>
          {erro && (
            <Typography color="error" mt={2}>
              {erro}
            </Typography>
          )}
        </Box>
      </Container>
    </>
  );
}

export default Login;
