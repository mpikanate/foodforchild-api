import * as express from "express";
import User from "../routes/user.js";
const prefix = `/api`;

export const endpointsInit = (app) => {
		app.use(`${prefix}/user`, User);
};
