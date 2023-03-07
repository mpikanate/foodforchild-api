import * as express from "express";
import User from "../routes/user.js";
import Food from "../routes/food.js";
import CookingMethod from "../routes/cooking-method.js";
import Ingredient from "../routes/ingredient.js";
import Nutrition from "../routes/nutrition.js";
const prefix = `/api`;

export const endpointsInit = (app) => {
		app.use(`${prefix}/user`, User);
		app.use(`${prefix}/food`, Food);
		app.use(`${prefix}/cooking-method`, CookingMethod);
		app.use(`${prefix}/ingredient`, Ingredient);
		app.use(`${prefix}/nutrition`, Nutrition);
};
