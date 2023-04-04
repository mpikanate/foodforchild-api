import { customResp, logger } from "../utils/helper.js";
import userRepository from "../repositories/user.repository.js"
import lodash from "lodash";

const {
} = process.env;

export const create = async (req, res) => {
	try {
		logger("info", "===== User Create =====");
		const { username, email, password } = req.body;
		const userData = await userRepository.findUserByEmail(email)
		if (lodash.size(userData) > 0) {
			return customResp(res, 400, `DUPLICATE_EMAIL`, {});
		} else {
			const result = await userRepository.createUser(username, email, password)
			// const dataObject = {
			// 	username: username,
			// 	email: email
			// };
			return customResp(res, 200, `SUCCESS`, result);
		}
	} catch (e) {
		return customResp(res, 500, `SOMETHING_WENT_WRONG`, e.message);
	}
};

export const login = async (req, res) => {
	try {
		logger("info", "===== User Login =====");
		const { email, password } = req.body;
		const result = await userRepository.loginUserByEmailPassword(email, password)
		return customResp(res, 200, `SUCCESS`, result);
	} catch (e) {
		if (e == "INCORRECT_PASSWORD") {
			return customResp(res, 401, e, e.message);
		} else if (e == "USER_WAS_NOT_FOUND") {
			return customResp(res, 404, e, e.message);
		} else {
			return customResp(res, 500, `SOMETHING_WENT_WRONG`, e.message);
		}

	}
};

export default {
	create,
	login
};
