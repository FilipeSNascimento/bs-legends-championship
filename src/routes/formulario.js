// routes/formulario.js

import express from 'express';
const router = express.Router();

router.get('/formulario', (req, res) => {
  res.render("formulario");
});

export default router;
