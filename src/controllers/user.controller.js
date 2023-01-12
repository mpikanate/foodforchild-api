import { customResp, logger } from "../utils/helper.js";

const {
} = process.env;

export const create = async (req, res) => {
	try {
		logger("info", "===== User Create =====");
		const dataObject = {
			
		};
		return customResp(res, 200, `SUCCESS`, dataObject);

	} catch (e) {
		return customResp(res, 500, `SOMETHING_WENT_WRONG`, e.message);
	}
};

export default {
	create
};
