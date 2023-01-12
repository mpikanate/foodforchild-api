import { getCreatedAtDateTimeSQL, logger } from "../utils/helper.js";
import database from "../services/database.service.js";
import bcrypt from "bcrypt"

const tableName = "users"
const createUser = async (username, email, password) => {
    // save to database
    const query = `INSERT INTO ${tableName} (username, email, password, created_at, updated_at) VALUES (?, ?, ?, ?, ?);`;

    // Value to be inserted
    const sqlDate = await getCreatedAtDateTimeSQL();

    return await new Promise((resolve, reject) => {
        // bcrypt password
        const saltRounds = 10;
        bcrypt.hash(password, saltRounds, async (err, hash) => {
            if (err) {
                throw err;
            }

            // Store hash in your password DB.
            // Creating queries
            await database.query(query, [username, email, hash, sqlDate, sqlDate], (err, rows) => {
                if (err) {
                    logger("error", err);
                    reject(err)
                }
                logger("info", "Row inserted with id = " + rows.insertId);
                resolve(rows);
            });
        });
    });
};

const findUserByEmail = async (email) => {
    // query to database
    const query = `SELECT * FROM ${tableName} WHERE email = ?`;
    return await new Promise((resolve, reject) => database.query(query, [email], (err, rows) => {
        if (err) {
            logger("error", err);
            reject(err)
        } else {
            logger("info", "findUserByEmail rows : " + rows);
            resolve(rows);
        }
    }));
};

export default {
    findUserByEmail,
    createUser
};
