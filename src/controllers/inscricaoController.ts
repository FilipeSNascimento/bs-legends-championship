import { Request, Response } from 'express';
import Inscricao from '../models/inscricao';

interface MulterRequest extends Request {
  files: {
    [fieldname: string]: Express.Multer.File[];
  };
}

export const cadastrarInscricao = async (req: MulterRequest, res: Response) => {
  try {
    const {
      nomeEquipe,
      titular1,
      titular2,
      titular3,
      reserva1,
      reserva2,
      instagram,
    } = req.body;

    // Garantir que os arquivos existam
    const logoEquipeFile = req.files?.['logoEquipe']?.[0];
    const comprovantePixFile = req.files?.['comprovantePix']?.[0];

    if (!logoEquipeFile || !comprovantePixFile) {
      return res.status(400).send('Logo da equipe e comprovante Pix são obrigatórios.');
    }

    await Inscricao.create({
      nomeEquipe,
      titular1,
      titular2,
      titular3,
      reserva1,
      reserva2,
      instagram,
      logoEquipe: logoEquipeFile.filename,
      comprovantePix: comprovantePixFile.filename,
    });

    res.redirect('/inscricao?sucesso=true');
  } catch (error) {
    console.error('Erro ao cadastrar inscrição:', error);
    res.status(500).send('Erro interno ao cadastrar inscrição.');
  }
};
