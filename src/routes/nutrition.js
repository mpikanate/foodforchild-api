import * as express from "express";
const router = express.Router();
import Nutrition from "../controllers/nutrition.controller.js";
import { verifyToken } from "../middlewares/authorization.js";

router.post(
    "/find-by-food-id",
    Nutrition.findByFoodId
);

export default router;
