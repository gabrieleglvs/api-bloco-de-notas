import express from "express"
import NotaController from "../controllers/notaController.js";

const routes = express.Router();

routes.get("/nota", NotaController.listarNotas);
routes.get("/nota/:id", NotaController.listarNotaPorId);
routes.post("/nota", NotaController.cadastrarNota);
routes.put("/nota/:id", NotaController.atualizarNota);
routes.delete("/nota/:id", NotaController.deletarNota);

export default routes;