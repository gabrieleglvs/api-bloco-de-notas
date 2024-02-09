import nota from "../models/Nota.js";

class NotaController {
    //GET
    static async listarNotas (req, res) {
        try {
            const listaNotas = await nota.find({});
            res.status(200).json(listaNotas);
        } catch (error) {
            res.status(500).json(
                {
                    message: `${error.message} - Falha na requisição`
                }
            );
        }
    }

    //GETBYID
    static async listarNotaPorId (req, res) {
        try {
            const id = req.params.id;
            const notaEncontrada = await nota.findById(id);
            res.status(200).json(notaEncontrada)
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha na requisição da nota`
            });
        }
    }

    //POST
    static async cadastrarNota (req, res) {
        try {
            const novaNota = await nota.create(req.body);
            res.status(201).json({
                message: "Nova tarefa criada com sucesso",
                tarefa: novaNota
            })
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha ao cadastrar nota`
            })
        }
    }

    //PUT
    static async atualizarNota (req, res) {
        try {
            const id = req.params.id;
            await nota.findByIdAndUpdate(id, req.body)
            res.status(200).json({
                message: "Nota atualizada com sucesso!"
            })
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha ao atualizar nota`
            })
        }
    }

    //DELETE
    static async deletarNota (req, res) {
        try {
            const id = req.params.id;
            await nota.findByIdAndDelete(id);
            res.status(200).json({
                message: "Nota excluida com sucesso!"
            })
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha ao excluir nota`
            })
        }
    }
}

export default NotaController;