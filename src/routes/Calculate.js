import * as express from "express";
const router = express.Router();
import Calculate from "../controllers/calculate-controller.js";
import { verifyToken } from "../middlewares/authorization.js";

router.post(
  "/calculate-height",
  Calculate.CalculateHeight
);

router.post(
  "/calculate-weight",
  Calculate.CalculateWeight
);

router.post(
  "/recommend-food",
  Calculate.RecommendFood
);


export default router;
