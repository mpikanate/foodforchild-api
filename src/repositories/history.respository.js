import { getCreatedAtDateTimeSQL, logger } from "../utils/helper.js";
import database from "../services/database.service.js";

const tableName = "History"
const findAllHistory = async (kid_id) => {
    // query to database
    const query = `SELECT * FROM ${tableName} Where KidID = ? ORDER BY str_to_date(DMY,'%d/%m/%Y') desc, id desc`;
    return await new Promise((resolve, reject) => database.query(query, [kid_id], (err, rows) => {
        if (err) {
            logger("error", err);
            reject(err)
        } else {
            logger("info", "findAllHistory rows : " + rows);
            resolve(rows);
        }
    }));
};

const create = async (data) => {
   // save to database
   const query = `INSERT INTO ${tableName} SET ?`;
   return await new Promise((resolve, reject) => database.query(query,data, (err, rows) => {
       if (err) {
           logger("error", err);
           reject(err)
       }
       logger("info", "Row inserted with id = " + rows["insertId"]);
       resolve(rows);
   }));
};



export default {
    findAllHistory,
    create
};
