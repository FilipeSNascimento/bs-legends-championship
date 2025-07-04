import express from 'express';
import multer from 'multer';
import path from 'path';
import { cadastrarInscricao } from '../controllers/inscricaoController.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

const upload = multer({ storage });

router.get('/inscricao', (req, res) => {
  let nome = "Filipe";
  res.render("inscricao", { nome, req });
});

router.post('/salvar-inscricao', upload.fields([
  { name: 'logoEquipe', maxCount: 1 },
  { name: 'comprovantePix', maxCount: 1 }
]), cadastrarInscricao);

export default router;
