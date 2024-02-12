import express from "express"
import nota from "./notaRouter.js"
import cors from "cors";

const routes = (app) => {
    app.route('/').get((req, res) => 
        res.status(200).send('TODO LIST - Minha primeira API em Node')
    )

    app.use(cors());
    app.use(express.json(), nota);
}

export default routes;