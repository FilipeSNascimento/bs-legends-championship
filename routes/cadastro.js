// routes/cadastro.js

import express from 'express';
const router = express.Router();

router.get('/cadastro', (req, res) => {
  res.render("cadastro");
});

router.post('/cadastro', (req, res) => {
  console.log(req.body); 
  res.redirect('/inscricao'); 
});

export default router;
