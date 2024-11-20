import express from "express";
import ListarTodosPosts from "../controller/postController.js";

const routes = (app) => {
    app.use(express.json());

    app.get("/posts", ListarTodosPosts);
}

export default routes;