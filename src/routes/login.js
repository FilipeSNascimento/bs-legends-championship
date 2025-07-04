// routes/login.js

import express from 'express';
import { autenticarUsuario } from '../controllers/userController.js';

const router = express.Router();

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', autenticarUsuario);

export default router;
