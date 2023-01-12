import dotenv from "dotenv";
dotenv.config();
import express from "express";
import http from "http";
import * as routes from "./routes/index.js"
import * as Route from "./services/routing.service.js";
import cors from "cors"

const host = process.env.SERVER_HOST;
const port = process.env.SERVER_PORT;

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*'
}));

// Routing
Route.endpointsInit(app);
routes.register( app );

const server = http.createServer(app);

// start the express server
server.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log("info", `server started at ${host}:${port}`);
});