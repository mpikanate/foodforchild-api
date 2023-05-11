import { customResp, logger } from "../utils/helper.js";
import CalculateRepository from "../repositories/calculate.repository.js";
import lodash from "lodash";

const {
} = process.env;

const CalculateHeight = async (req, res) => {
    try {
        logger("info", "=====CalculateHeight =====");
        const { years, months, gender, height } = req.body;
        const result = await CalculateRepository.CalculateHeight(years, months, gender, height);
        return customResp(res, 200, `SUCCESS`, result);

    } catch (e) {
        return customResp(res, 500, `SOMETHING_WENT_WRONG`, e.message);
    }
};

const CalculateWeight = async (req, res) => {
    try {
        logger("info", "=====CalculateWeight =====");
        const { years, months, gender, weight } = req.body;
        const result = await CalculateRepository.CalculateWeight(years, months, gender, weight);
        return customResp(res, 200, `SUCCESS`, result);

    } catch (e) {
        return customResp(res, 500, `SOMETHING_WENT_WRONG`, e.message);
    }
};

const RecommendFood = async (req, res) => {
    try {
        logger("info", "=====RecommendFood =====");
        const { type } = req.body;
        const result = await CalculateRepository.RecommendFood(type);
        return customResp(res, 200, `SUCCESS`, result);

    } catch (e) {
        return customResp(res, 500, `SOMETHING_WENT_WRONG`, e.message);
    }
};

export default {
    CalculateHeight,
    CalculateWeight,
    RecommendFood
};
