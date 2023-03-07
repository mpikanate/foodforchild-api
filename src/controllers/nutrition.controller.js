import { customResp, logger } from "../utils/helper.js";
import nutritionRepository from "../repositories/nutrition.repository.js"
import lodash from "lodash";

const {
} = process.env;

const findByFoodId = async (req, res) => {
    try {
        logger("info", "===== Nutrition findByFoodId =====");
        const { food_id } = req.body;
        const result = await nutritionRepository.findNutritionByFoodId(food_id)
        return customResp(res, 200, `SUCCESS`, result);

    } catch (e) {
        return customResp(res, 500, `SOMETHING_WENT_WRONG`, e.message);
    }
};

export default {
	findByFoodId,
};
