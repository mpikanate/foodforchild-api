import { customResp, logger } from "../utils/helper.js";
import KidsRepository from "../repositories/Kids.repository.js";
import lodash from "lodash";

const {
} = process.env;

const findAllKids = async (req, res) => {
    try {
        logger("info", "=====findAllKids =====");
        const result = await KidsRepository.findAllKids();
        return customResp(res, 200, `SUCCESS`, result);

    } catch (e) {
        return customResp(res, 500, `SOMETHING_WENT_WRONG`, e.message);
    }
};



export default {
	findAllKids
};
