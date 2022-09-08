import express, {json} from "express";
import cors from 'cors';
import 'express-async-errors';
import { handleError } from "./utils/errors";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));
app.use(json());

app.use(handleError);

app.listen(3001, '0.0.0.0',() => {
    console.log('Listening on http://localhost:3001');
});