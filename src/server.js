const express = require('express');
const pool = require('./db');

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('API funcionando!');
});

// Rota de teste do banco
app.get('/teste-bd', async (req, res) => {
  try {
    const resultado = await pool.query('SELECT NOW()');
    res.json(resultado.rows[0]);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: 'Erro ao conectar no banco' });
  }
});

// Listar todos os jogadores
app.get('/jogadores', async (req, res) => {
  try {
    const resultado = await pool.query('SELECT * FROM jogadores');
    res.json(resultado.rows);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: 'Erro ao buscar jogadores' });
  }
});

// Listar todos os jogos
app.get('/jogos', async (req, res) => {
  try {
    const resultado = await pool.query('SELECT * FROM jogos');
    res.json(resultado.rows);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: 'Erro ao buscar jogos' });
  }
});

// Listar todas as estatisticas
app.get('/estatisticas', async (req, res) => {
  try {
    const resultado = await pool.query('SELECT * FROM estatisticas');
    res.json(resultado.rows);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: 'Erro ao buscar estatisticas' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});