import e from "express";
import { expanseController } from "../controller/expanse.controller.js";
export const expanseRouter = e.Router();
expanseRouter.route("/delete/:expanseId").get(expanseController.GET);
expanseRouter.route("/add").post(expanseController.POST)