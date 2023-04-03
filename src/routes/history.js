import * as express from "express";
const router = express.Router();
import History from "../controllers/history.controller.js";
import { verifyToken } from "../middlewares/authorization.js";

router.post(
    "/find-all",
  History.findAllHistory
);



export default router;
