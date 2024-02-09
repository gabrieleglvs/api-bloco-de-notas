import express from "express";
import conectaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const app = express();
routes(app);

const conexao = await conectaDatabase();

conexao.on("error", (erro) => {
    console.error('Erro de conexão', erro);
})

conexao.once("open", () => {
    console.log("Conectado ao banco de dados")
})

export default app;