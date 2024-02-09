import mongoose from "mongoose";

//abrindo uma conexão com o banco de dados
async function conectaDatabase() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection;
};



export default conectaDatabase;