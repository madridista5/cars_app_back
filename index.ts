import express, {json} from "express";
import dotenv from "dotenv";
import cors from 'cors';
import 'express-async-errors';
import { handleError } from "./utils/errors";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));
app.use(json());

app.use(cookieParser());
app.use(handleError);

app.listen(3001, '0.0.0.0',() => {
    console.log('Listening on http://localhost:3001');
});