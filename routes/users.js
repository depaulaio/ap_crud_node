const express = require('express')
const router = express.Router()
const db = require('../config/database')

// Função auxiliar para gerenciar consultas
const handleQuery = (res, query, params) => {
  db.query(query, params, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao executar a consulta' });
      return
    }
    res.json(results)
  });
};

// GET Todos os Usuários
router.get('/', (req, res) => {
  handleQuery(res, 'SELECT * FROM users', [])
});

// GET Usuário por ID
router.get('/:id', (req, res) => {
  handleQuery(res, 'SELECT * FROM users WHERE id = ?', [req.params.id])
});

// POST Criar Usuário
router.post('/', (req, res) => {
  const { name, email, age } = req.body;
  handleQuery(res, 'INSERT INTO users (name, email, age) VALUES (?, ?, ?)', [name, email, age])
});

// PUT Atualizar Usuário
router.put('/:id', (req, res) => {
  const { name, email, age } = req.body
  handleQuery(res, 'UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?', [name, email, age, req.params.id])
});

// DELETE Excluir Usuário
router.delete('/:id', (req, res) => {
  handleQuery(res, 'DELETE FROM users WHERE id = ?', [req.params.id])
});

module.exports = router

//Observações quanto a: router, db, handleQuery, res, req, query, params, err, results.
