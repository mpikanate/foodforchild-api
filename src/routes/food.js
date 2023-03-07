import * as express from "express";
const router = express.Router();
import Food from "../controllers/food.controller.js";
import { verifyToken } from "../middlewares/authorization.js";

router.post(
    "/find-all",
    Food.findAll
);

router.post(
    "/find-by-name",
    Food.findByName
);

router.post(
    "/find-by-id",
    Food.findById
);

export default router;
