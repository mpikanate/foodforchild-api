import { getCreatedAtDateTimeSQL, logger } from "../utils/helper.js";
import database from "../services/database.service.js";

const tableName = "History"
const findAllHistory = async () => {
    // query to database
    const query = `SELECT DMY,Height,Weight FROM ${tableName} Where KidID = 1`;
    return await new Promise((resolve, reject) => database.query(query, (err, rows) => {
        if (err) {
            logger("error", err);
            reject(err)
        } else {
            logger("info", "findAllHistory rows : " + rows);
            resolve(rows);
        }
    }));
};




export default {
    findAllHistory
};
