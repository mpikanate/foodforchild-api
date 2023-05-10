import * as express from "express";
const router = express.Router();
import Kids from "../controllers/Kids-controller.js";
import { verifyToken } from "../middlewares/authorization.js";

router.post(
  "/find-all",
  Kids.findAllKids
);

router.post(
  "/find-by-id",
  Kids.findById
);

router.post(
  "/create",
  Kids.create
);

router.post(
  "/update",
  Kids.update
);

router.post(
  "/find-by-user-id",
  Kids.findByUserId
);


export default router;
