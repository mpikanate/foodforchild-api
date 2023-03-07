import { customResp, logger } from "../utils/helper.js";
import ingredientRepository from "../repositories/ingredient.repository.js"
import lodash from "lodash";

const {
} = process.env;

const findByFoodId = async (req, res) => {
    try {
        logger("info", "===== Ingredient findByFoodId =====");
        const { food_id } = req.body;
        const result = await ingredientRepository.findIngredientByFoodId(food_id)
        return customResp(res, 200, `SUCCESS`, result);

    } catch (e) {
        return customResp(res, 500, `SOMETHING_WENT_WRONG`, e.message);
    }
};

export default {
	findByFoodId,
};
