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

router.post(
    "/find-by-ids",
    Food.findByIds
);

router.post(
    "/find-by-age-group",
    Food.findByAgeGroup
);

router.post(
    "/find-favorite",
    Food.findFavorite
);

router.post(
    "/favorite",
    Food.favorite
);

router.post(
    "/unfavorite",
    Food.unfavorite
);

export default router;
