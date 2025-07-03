const express = require('express');
const app = express();

const bodyParser = require("body-parser");

app.use(express.static('public'));

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

//Rota raiz
app.get('/', (req, res) => {
  let nome = "Filipe";
  res.render("bs_legends", {
    nome: nome,
  }
  );
});

//Rota /formulário
app.get('/formulario', (req, res) => {
  res.render("formulario");
});

//Rota /bs_legends
app.get('/bs_legends', (req, res) => {
  let nome = "Filipe";
  res.render("bs_legends", {
    nome: nome,
  });
});

//Rota /bs_legends
app.get('/bs_legends#form-login', (req, res) => {
  res.render("bs_legends#form-login");
});

//Rota /inscricao
app.get('/inscricao', (req, res) => {
  let nome = "Filipe";
  res.render("inscricao", {
    nome: nome,
  }
  );
});

//Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});