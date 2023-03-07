import { customResp, logger } from "../utils/helper.js";
import cookingMethodRepository from "../repositories/cooking-method.repository.js"
import lodash from "lodash";

const {
} = process.env;

const findByFoodId = async (req, res) => {
    try {
        logger("info", "===== Cooking Method findByFoodId =====");
        const { food_id } = req.body;
        const result = await cookingMethodRepository.findCookingMethodByFoodId(food_id)
        return customResp(res, 200, `SUCCESS`, result);

    } catch (e) {
        return customResp(res, 500, `SOMETHING_WENT_WRONG`, e.message);
    }
};

export default {
	findByFoodId,
};
