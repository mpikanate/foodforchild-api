import { getCreatedAtDateTimeSQL, logger } from "../utils/helper.js";
import database from "../services/database.service.js";
import bcrypt from "bcrypt"
import lodash from "lodash";
import jwt from "jsonwebtoken"

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
                logger("error", err);
                reject(err)
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

const loginUserByEmailPassword = async (email, password) => {
    // query to database
    const query = `SELECT * FROM ${tableName} WHERE email = ?`;
    return await new Promise((resolve, reject) => database.query(query, [email], (err, rows) => {
        if (err) {
            logger("error", err);
            reject(err)
        } else {
            if (lodash.size(rows) > 0) {
                const userData = rows[0]
                const hashPassword = userData["password"]

                bcrypt.compare(password, hashPassword, (err, result) => {
                    if (err) {
                        logger("error", err);
                        reject(err)
                    } else {
                        if (result) {
                            // Delete password to do not show in response
                            if (userData["password"]) {
                                delete userData["password"]
                            }

                            // Sign Token
                            const token = jwt.sign({
                                data: userData
                            }, 'secret', { expiresIn: '1h' });

                            if (token) {
                                userData["access_token"] = token
                            }

                            resolve(userData);
                        } else {
                            reject('INCORRECT_PASSWORD')
                        }
                    }
                });
            } else {
                reject('USER_WAS_NOT_FOUND')
            }

        }
    }));
};

export default {
    findUserByEmail,
    loginUserByEmailPassword,
    createUser
};
