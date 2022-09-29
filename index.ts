import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import 'express-async-errors';
import { handleError } from "./utils/errors";
import cookieParser from "cookie-parser";
import {authRouter} from "./routes/auth.router";
import {carsRouter} from "./routes/cars.router";
import {imagesRouter} from "./routes/images.router";
import {usersRouter} from "./routes/users.router";
import {config} from "./config/config";
import {watchRouter} from "./routes/watch.router";

const app = express();
dotenv.config();

app.use(cors({
    origin: config.corsOrigin,
    credentials: true,
}));
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/cars', carsRouter);
app.use('/api/images', imagesRouter);
app.use('/api/users', usersRouter);
app.use('/api/watch', watchRouter);

app.use(handleError);

app.listen(3001, '0.0.0.0',() => {
    console.log('Listening on http://localhost:3001');
});