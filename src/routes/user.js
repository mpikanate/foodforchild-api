import * as express from "express";
const router = express.Router();
import User from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/authorization.js";

router.post(
    "/create",
    // verifyToken,
    User.create
);

router.post(
    "/login",
    // verifyToken,
    User.login
);

export default router;
