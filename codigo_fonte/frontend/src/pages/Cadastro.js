import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import NavbarAut from '../components/NavbarAut';
import api from '../services/api'; // importa configuração axios
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '', 
    confirmPassword: ''
  });
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  // Atualiza os campos conforme usuário digita
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  //envio de cadastro
  const handleCadastro = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMensagem('As senhas não conferem.');
      return;
    }

    try {
      // Faz o POST para o back
      await api.post('usuarios/', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      setMensagem('Usuário cadastrado com sucesso!');
      setTimeout(() => navigate('/login'), 2000); // redireciona para login
    } catch (error) {
      setMensagem('Erro ao cadastrar. Verifique os dados.');
      console.error(error);
    }
  };

  return (
    <>
      <NavbarAut />
      <Container maxWidth="xs">
        <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
          <Typography variant="h5" component="h1" gutterBottom>
            Cadastre-se
          </Typography>
          <form onSubmit={handleCadastro} style={{ width: '100%' }}>
            <TextField
              label="Nome"
              name="username"
              fullWidth
              margin="normal"
              required
              value={formData.username}
              onChange={handleChange}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              margin="normal"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              label="Senha"
              name="password"
              type="password"
              fullWidth
              margin="normal"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <TextField
              label="Confirmar Senha"
              name="confirmPassword"
              type="password"
              fullWidth
              margin="normal"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Criar Conta
            </Button>
          </form>
          {mensagem && (
            <Typography color="error" mt={2}>
              {mensagem}
            </Typography>
          )}
        </Box>
      </Container>
    </>
  );
}

export default Cadastro;


