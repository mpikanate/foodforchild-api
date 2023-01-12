import log4js from "log4js";
import moment from "moment-timezone";
// import database from "../bootstrap/database";

const customResp = (res, statusCode = 200, message = "", data = null, other = null) => {
	let returnData = {
		statusCode,
		message
	};
	if (data) {
		returnData.data = data;
	}

	if (other) {
		returnData = { ...returnData, ...other };
	}
	return res.status(statusCode).json(returnData);
};

const logger = async (logLevel, message) => {
	const logging = log4js.getLogger();
	switch (logLevel) {
		case "debug":
			logging.level = "debug";
			return logging.debug(message);
		case "error":
			logging.level = "error";
			return logging.error(message);
		case "info":
			logging.level = "info";
			return logging.info(message);
		default:
			logging.level = "info";
			return logging.info(message);
	}
};

const getCreatedAtDateTimeSQL = async () => {
	const createdAt = moment.tz(moment(), "Asia/Bangkok").format();
	const sqlDate = createdAt.slice(0, 19).replace("T", " ");
	return sqlDate;
};

export {
	customResp, logger, getCreatedAtDateTimeSQL
};
