import { customResp, logger } from "../utils/helper.js";
import historyRespository from "../repositories/history.respository.js";
import lodash from "lodash";

const {
} = process.env;

const findAllHistory = async (req, res) => {
    try {
        logger("info", "===== History findAllHistory =====");
        const { kid_id } = req.body;
        const result = await historyRespository.findAllHistory(kid_id);
        return customResp(res, 200, `SUCCESS`, result);

    } catch (e) {
        return customResp(res, 500, `SOMETHING_WENT_WRONG`, e.message);
    }
};

const create = async (req, res) => {
    try {
        logger("info", "===== History create =====");
        const result = await historyRespository.create(req.body);
        return customResp(res, 200, `SUCCESS`, result);

    } catch (e) {
        return customResp(res, 500, `SOMETHING_WENT_WRONG`, e.message);
    }
};

export default {
	findAllHistory,
    create
};
