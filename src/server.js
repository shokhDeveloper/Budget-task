import express from "express";
import ejs from "ejs";
import path from "node:path";
import { createDirName } from "#utils";
import { PORT } from "#config";
import { router } from "#router";
import { expanseRouter } from "./router/expanse.router.js";
const app = express();
app.use(express.urlencoded({extended: true}));

app.engine("html", ejs.renderFile);
app.set("view engine", "html");
app.set("views", path.join(createDirName(import.meta.url), "views"));
app.use("/expanse", expanseRouter)
app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running by http://localhost:${PORT}`);
});