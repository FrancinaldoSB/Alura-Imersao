import express from "express";
import routes from "./src/routes/postRoutes.js";

const app = express();

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

routes(app);