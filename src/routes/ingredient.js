import * as express from "express";
const router = express.Router();
import Ingredient from "../controllers/ingredient.controller.js";
import { verifyToken } from "../middlewares/authorization.js";

router.post(
    "/find-by-food-id",
    Ingredient.findByFoodId
);

export default router;
