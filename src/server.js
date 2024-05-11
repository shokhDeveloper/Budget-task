import express from "express";
import ejs from "ejs";
import path from "node:path";
import { createDirName } from "#utils";
import { PORT } from "#config";
const app = express();
app.engine("html", ejs.renderFile);
app.set("view engine", "html");
app.set("views", path.join(createDirName(import.meta.url), "views"));

app.listen(PORT, () => {
    console.log(`Server is running by http://localhost:${PORT}`)
})