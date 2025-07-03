const express = require('express');
const app = express();

const bodyParser = require("body-parser");

app.use(express.static('public'));

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

//Rota raiz
app.get('/', (req, res) => {
    res.render("index.ejs")
});

//Rota /formulário
app.get('/formulario', (req, res) => {
    res.render("formulario.ejs");
});

//Rota /bs_legends
app.get('/bs_legends', (req, res) => {
    res.render("bs_legends");
});

//Rota /bs_legends
app.get('bs_legends#form-login', (req, res) => {
    res.render("bs_legends#form-login");
});

//Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});