import {Router} from "express";
import {addCar, getOneCarById, getSearchCars} from "../controllers/car.controller";
import {verifyUser} from "../utils/verifyToken";

export const carsRouter = Router();

carsRouter
    .post('/add/:id', verifyUser, addCar)
    .post('/getSearchCars', getSearchCars)
    .get('/getOneCar/:id', getOneCarById);