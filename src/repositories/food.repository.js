import { getCreatedAtDateTimeSQL, logger } from "../utils/helper.js";
import database from "../services/database.service.js";

const tableName = "Foods"
const findAllFood = async () => {
    // query to database
    const query = `SELECT * FROM ${tableName}`;
    return await new Promise((resolve, reject) => database.query(query, (err, rows) => {
        if (err) {
            logger("error", err);
            reject(err)
        } else {
            logger("info", "findAllFood rows : " + rows);
            resolve(rows);
        }
    }));
};

const findFoodByName = async (name) => {
    // query to database
    const query = `SELECT * FROM ${tableName} WHERE name like '%${name}%' LIMIT 1`;
    return await new Promise((resolve, reject) => database.query(query, (err, rows) => {
        if (err) {
            logger("error", err);
            reject(err)
        } else {
            logger("info", "findFoodByName rows : " + rows);
            resolve(rows);
        }
    }));
};

const findFoodById = async (id) => {
    // query to database
    const query = `SELECT * FROM ${tableName} WHERE FoodID = ? LIMIT 1`;
    return await new Promise((resolve, reject) => database.query(query, [id], (err, rows) => {
        if (err) {
            logger("error", err);
            reject(err)
        } else {
            logger("info", "findFoodById rows : " + rows);
            resolve(rows);
        }
    }));
};

export default {
    findAllFood,
    findFoodByName,
    findFoodById
};
