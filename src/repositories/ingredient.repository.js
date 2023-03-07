import { getCreatedAtDateTimeSQL, logger } from "../utils/helper.js";
import database from "../services/database.service.js";

const tableName = "Ingredients"

const findIngredientByFoodId = async (foodId) => {
    // query to database
    const query = `SELECT * FROM ${tableName} WHERE FoodID = ? LIMIT 1`;
    return await new Promise((resolve, reject) => database.query(query, [foodId], (err, rows) => {
        if (err) {
            logger("error", err);
            reject(err)
        } else {
            logger("info", "findIngredientByFoodId rows : " + rows);
            resolve(rows);
        }
    }));
};

export default {
    findIngredientByFoodId,
};
