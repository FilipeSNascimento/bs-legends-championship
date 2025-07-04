// routes/inscricao.js

import express from 'express';
const router = express.Router();

router.get('/inscricao', (req, res) => {
  let nome = "Filipe";
  res.render("inscricao", {
    nome: nome,
  }
  );
});

export default router;
