import bodyParser from "body-parser";
import express from "express";
import homeRoutes from "./routes/home.js";
import formularioRoutes from "./routes/formulario.js";
import inscricaoRoutes from "./routes/inscricao.js";

const app = express();

app.set("view engine", "ejs");

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use("/css", express.static("./node_modules/bootstrap/dist/css"));
app.use("/js", express.static("./node_modules/bootstrap/dist/js"));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/", homeRoutes);
app.use("/", formularioRoutes);
app.use("/", inscricaoRoutes);

//Iniciar o servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});