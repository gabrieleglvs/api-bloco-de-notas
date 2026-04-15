import "dotenv/config";
import app from "./src/app.js"

const PORT = process.env.PORT || 5000;

//aqui eu estou abrindo minha conexão com o servidor na porta 5000
app.listen(PORT, () => {
    console.log("Servidor escutando!")
});
