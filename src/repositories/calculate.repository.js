import { getCreatedAtDateTimeSQL, logger } from "../utils/helper.js";
import database from "../services/database.service.js";

const CalculateHeight = async (years, months, gender, height) => {
    // query to database
    const query = `SELECT calculate_height FROM Growth_height gh where gender = ? and year = ? and month = ? and min_height <= ? and max_height >= ? LIMIT 1`;
    return await new Promise((resolve, reject) => database.query(query, [gender, years, months, height, height], (err, rows) => {
        if (err) {
            logger("error", err);
            reject(err)
        } else {
            logger("info", "CalculateHeight rows : " + rows);
            resolve(rows);
        }
    }));
};

const CalculateWeight = async (years, months, gender, weight) => {
    // query to database
    const query = `SELECT calculate_weight FROM Growth_weight gh where gender = ? and year = ? and month = ? and min_weight <= ? and max_weight >= ? LIMIT 1`;
    return await new Promise((resolve, reject) => database.query(query, [gender, years, months, weight, weight], (err, rows) => {
        if (err) {
            logger("error", err);
            reject(err)
        } else {
            logger("info", "CalculateHeight rows : " + rows);
            resolve(rows);
        }
    }));
};


const RecommendFood = async (type) => {
    // query to database
    const query = `SELECT * FROM Foods_Under_Over where type = ? ORDER BY RAND() LIMIT 1`;
    return await new Promise((resolve, reject) => database.query(query, [type], (err, rows) => {
        if (err) {
            logger("error", err);
            reject(err)
        } else {
            logger("info", "RecommendFood rows : " + rows);
            resolve(rows);
        }
    }));
};

export default {
    CalculateHeight,
    CalculateWeight,
    RecommendFood
};
