// routes/cadastro.js

import express from 'express';
import { cadastrarUsuario } from '../controllers/userController.js';
const router = express.Router();

router.get('/cadastro', (req, res) => {
  res.render("cadastro");
});

router.post('/cadastro', cadastrarUsuario);

export default router;
