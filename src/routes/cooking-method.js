import * as express from "express";
const router = express.Router();
import CookingMethod from "../controllers/cooking-method.controller.js";
import { verifyToken } from "../middlewares/authorization.js";

router.post(
    "/find-by-food-id",
    CookingMethod.findByFoodId
);

export default router;
