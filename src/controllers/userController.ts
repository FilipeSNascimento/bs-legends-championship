// controllers/userController.ts
import { Request, Response } from 'express';
import User from '../models/user';

export const cadastrarUsuario = async (req: Request, res: Response) => {
  const { nome, sobrenome, email, senha } = req.body;

  try {
    const usuarioExistente = await User.findOne({ where: { email } });

    if (usuarioExistente) {
      return res.status(400).send('Este e-mail já está cadastrado.');
    }

  await User.create({
    nome: nome,
    sobrenome: sobrenome,
    email,
    senha,
  });

    res.redirect('/inscricao');
  } catch (error) {
    console.error('Erro ao cadastrar:', error);
    res.status(500).send('Erro interno ao cadastrar usuário.');
  }
};

export const autenticarUsuario = async (req: Request, res: Response) => {
  const { email, senha } = req.body;

  try {
    const usuario = await User.findOne({ where: { email } });

    if (!usuario) {
      return res.status(401).send('E-mail ou senha incorretos.');
    }

    if (usuario.senha !== senha) {
      return res.status(401).send('E-mail ou senha incorretos.');
    }

    // Login bem-sucedido
    res.redirect('/inscricao');
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).send('Erro interno ao autenticar usuário.');
  }
};