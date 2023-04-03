import * as express from "express";
const router = express.Router();
import Kids from "../controllers/Kids-controller.js";
import { verifyToken } from "../middlewares/authorization.js";

router.post(
    "/find-all",
  Kids.findAllKids
);



export default router;
