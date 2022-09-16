import {Router} from "express";
import {addCar} from "../controllers/car.controller";
import {verifyUser} from "../utils/verifyToken";

export const carsRouter = Router();

carsRouter
    .post('/add/:id', verifyUser, addCar);