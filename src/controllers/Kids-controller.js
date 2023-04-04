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

const findById = async (req, res) => {
    try {
        logger("info", "=====findById =====");
        const { kid_id } = req.body;
        const result = await KidsRepository.findKidById(kid_id);
        return customResp(res, 200, `SUCCESS`, result);

    } catch (e) {
        return customResp(res, 500, `SOMETHING_WENT_WRONG`, e.message);
    }
};

const create = async (req, res) => {
    try {
        logger("info", "=====create =====");
        const result = await KidsRepository.createKid(req.body);
        return customResp(res, 200, `SUCCESS`, result);

    } catch (e) {
        return customResp(res, 500, `SOMETHING_WENT_WRONG`, e.message);
    }
};

const update = async (req, res) => {
    try {
        logger("info", "=====update =====");
        const result = await KidsRepository.updateKid(req.body);
        return customResp(res, 200, `SUCCESS`, result);

    } catch (e) {
        return customResp(res, 500, `SOMETHING_WENT_WRONG`, e.message);
    }
};



export default {
	findAllKids,
	findById,
    create,
    update
};
