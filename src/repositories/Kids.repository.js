import { getCreatedAtDateTimeSQL, logger } from "../utils/helper.js";
import database from "../services/database.service.js";

const tableName = "Kids"
const findAllKids = async () => {
    // query to database
    const query = `SELECT * FROM ${tableName} `;
    return await new Promise((resolve, reject) => database.query(query, (err, rows) => {
        if (err) {
            logger("error", err);
            reject(err)
        } else {
            logger("info", "findAllKids rows : " + rows);
            resolve(rows);
        }
    }));
};




export default {
    findAllKids
};
