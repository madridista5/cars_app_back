import {Router} from "express";
import {addCar, getOneCarById, getSearchCars, getUsersCars} from "../controllers/car.controller";
import {verifyUser} from "../utils/verifyToken";

export const carsRouter = Router();

carsRouter
    .post('/add/:id', verifyUser, addCar)
    .post('/getSearchCars', getSearchCars)
    .get('/getOneCar/:id', getOneCarById)
    .get('/getUsersCars/:id', verifyUser, getUsersCars);