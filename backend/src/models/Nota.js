import mongoose from "mongoose";

const notaSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true},
    conteudo: { type: String }
}, {versionKey: false});

const nota = mongoose.model("notas", notaSchema);

export default nota;