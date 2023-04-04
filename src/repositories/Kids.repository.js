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

const findKidById = async (id) => {
    // query to database
    const query = `SELECT * FROM ${tableName} WHERE KidID = ? LIMIT 1`;
    return await new Promise((resolve, reject) => database.query(query, [id], (err, rows) => {
        if (err) {
            logger("error", err);
            reject(err)
        } else {
            logger("info", "findKidById rows : " + rows);
            resolve(rows);
        }
    }));
};

const createKid = async (data) => {
    // save to database
    const query = `INSERT INTO ${tableName} SET ?`;
    return await new Promise((resolve, reject) => database.query(query,data, (err, rows) => {
        if (err) {
            logger("error", err);
            reject(err)
        }
        logger("info", "Row inserted with id = " + rows.insertId);
        resolve(rows);
    }));
};

const updateKid = async (data) => {
    // update to database
    const query = `UPDATE ${tableName} SET ? where KidID = ?`;
    return await new Promise((resolve, reject) => database.query(query,[data, data.KidID], (err, rows) => {
        if (err) {
            logger("error", err);
            reject(err)
        }
        logger("info", "Row inserted with id = " + rows.insertId);
        resolve(rows);
    }));
};


export default {
    findAllKids,
    findKidById,
    createKid,
    updateKid
};
