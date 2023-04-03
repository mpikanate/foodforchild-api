import { customResp, logger } from "../utils/helper.js";
import historyRespository from "../repositories/history.respository.js";
import lodash from "lodash";

const {
} = process.env;

const findAllHistory = async (req, res) => {
    try {
        logger("info", "===== Food findAllHistory =====");
        const result = await historyRespository.findAllHistory();
        return customResp(res, 200, `SUCCESS`, result);

    } catch (e) {
        return customResp(res, 500, `SOMETHING_WENT_WRONG`, e.message);
    }
};



export default {
	findAllHistory
};
