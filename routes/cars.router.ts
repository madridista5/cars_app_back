import {Router} from "express";
import {addCar, getAllCars, getOneCarById, getSearchCars, getUsersCars} from "../controllers/car.controller";
import {verifyUser} from "../utils/verifyToken";

export const carsRouter = Router();

carsRouter
    .post('/add/:id', verifyUser, addCar)
    .post('/getSearchCars', getSearchCars)
    .get('/getAllCars', getAllCars)
    .get('/getOneCar/:id', getOneCarById)
    .get('/getUsersCars/:id', verifyUser, getUsersCars);