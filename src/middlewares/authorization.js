import lodash from "lodash";
import { customResp, logger } from "../utils/helper.js";

export const verifyToken = async (req, res, next) => {
	try {
		const { headers } = req;
		const bearerHeader = headers.authorization || "";
		if (!bearerHeader) {
			return customResp(res, 401, `UNAUTHORIZE`);
		}
		const bearerToken = bearerHeader.split(" ")[1];
		const payload = JWTverifyToken(bearerToken);
		// console.log("payload", payload);
		const tokenName = lodash.get(payload, "name") ? lodash.get(payload, "name") : "";
		// if (lodash.has(payload, "name")) {
		if (tokenName === "JsonWebTokenError" || tokenName === "TokenExpiredError") {
			return customResp(res, 401, `UNAUTHORIZE`, payload);
		}
		// } else {
		// 	return customResp(res, 500, `SOMETHING_WENT_WRONG`, payload);
		// }

		const sub = lodash.get(payload, "sub") || "";
		if (!sub) {
			return customResp(res, 401, `UNAUTHORIZE`, payload);
		} else {
			req.sub = sub;
		}

		next();

	} catch (error) {
		logger("error", error.message);
		return customResp(res, 401, `UNAUTHORIZE`, error.message);
	}
};
