// routes/home.js

import express from 'express';
const router = express.Router();

router.get("/", (req, res) => {
  const nome = "Filipe";
  res.render("bs_legends", { nome });
});

router.get("/bs_legends", (req, res) => {
  const nome = "Filipe";
  res.render("bs_legends", { nome });
});

router.get("/bs_legends#form-login", (req, res) => {
  res.redirect("/bs_legends");
});

export default router;
