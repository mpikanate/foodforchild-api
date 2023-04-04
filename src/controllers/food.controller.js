import { customResp, logger } from "../utils/helper.js";
import foodRepository from "../repositories/food.repository.js"
import lodash from "lodash";

const {
} = process.env;

const findAll = async (req, res) => {
    try {
        logger("info", "===== Food findAll =====");
        const result = await foodRepository.findAllFood()
        return customResp(res, 200, `SUCCESS`, result);

    } catch (e) {
        return customResp(res, 500, `SOMETHING_WENT_WRONG`, e.message);
    }
};

const findByName = async (req, res) => {
    try {
        logger("info", "===== Food findByName =====");
        const { name } = req.body;
        const result = await foodRepository.findFoodByName(name)
        return customResp(res, 200, `SUCCESS`, result);

    } catch (e) {
        return customResp(res, 500, `SOMETHING_WENT_WRONG`, e.message);
    }
};

const findById = async (req, res) => {
    try {
        logger("info", "===== Food findById =====");
        const { food_id } = req.body;
        const result = await foodRepository.findFoodById(food_id)
        return customResp(res, 200, `SUCCESS`, result);

    } catch (e) {
        return customResp(res, 500, `SOMETHING_WENT_WRONG`, e.message);
    }
};

const findByIds = async (req, res) => {
    try {
        logger("info", "===== Food findByIds =====");
        const { food_ids } = req.body;
        const result = await foodRepository.findFoodByIds(food_ids)
        return customResp(res, 200, `SUCCESS`, result);

    } catch (e) {
        return customResp(res, 500, `SOMETHING_WENT_WRONG`, e.message);
    }
};

const findByAgeGroup = async (req, res) => {
    try {
        logger("info", "===== Food findByAgeGroup =====");
        const { age_group, limit } = req.body;
        const result = await foodRepository.findByAgeGroup(age_group, limit)
        return customResp(res, 200, `SUCCESS`, result);

    } catch (e) {
        return customResp(res, 500, `SOMETHING_WENT_WRONG`, e.message);
    }
};

export default {
    findAll,
    findByName,
    findById,
    findByIds,
    findByAgeGroup
};
