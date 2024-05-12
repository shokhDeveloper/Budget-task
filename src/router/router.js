import { routerController } from "#controller";
import express from "express";
export const router = express.Router()

router.route("/home").get(routerController.GET);