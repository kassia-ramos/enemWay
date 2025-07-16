import React, { useEffect, useState } from 'react';
import {
  Typography, Container, Paper, Table, TableHead, TableBody,
  TableRow, TableCell, CircularProgress, Box
} from '@mui/material';
import api from '../services/api';
import NavbarAut from '../components/NavbarAut';

function MinhasSimulacoes() {
  const [simulacoes, setSimulacoes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSimulacoes = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await api.get('/simulacoes/listar/', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setSimulacoes(response.data);
      } catch (error) {
        console.error("Erro ao buscar simulações:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSimulacoes();
  }, []);

  return (
    <>
      <NavbarAut />
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
          <Typography variant="h4" gutterBottom>
            Minhas Simulações
          </Typography>

          {loading ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          ) : simulacoes.length === 0 ? (
            <Typography variant="body1">
              Você ainda não realizou nenhuma simulação.
            </Typography>
          ) : (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Data</TableCell>
                  <TableCell>Curso</TableCell>
                  <TableCell>Instituição</TableCell>
                  <TableCell>Estado</TableCell>
                  <TableCell align="center">Notas (L, M, H, N, R)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {simulacoes.map((sim, index) => (
                  <TableRow key={index}>
                    <TableCell>{new Date(sim.data_criacao).toLocaleDateString()}</TableCell>
                    <TableCell>{sim.curso_desejado}</TableCell>
                    <TableCell>{sim.instituicao_desejada}</TableCell>
                    <TableCell>{sim.estado}</TableCell>
                    <TableCell align="center">
                      {sim.nota_linguagensCodigoseTecnologias}, {sim.nota_matematicaeTecnologias}, {sim.nota_cienciasHumanaseTecnologias}, {sim.nota_cienciasNaturezaeTecnologias}, {sim.nota_redacao}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </Paper>
      </Container>
    </>
  );
}

export default MinhasSimulacoes;
