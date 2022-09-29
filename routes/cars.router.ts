import {Router} from "express";
import {addCar, deleteOneCar, getAllCars, getOneCarById, getSearchCars, getUsersCars} from "../controllers/car.controller";
import {verifyAdmin, verifyUser} from "../utils/verifyToken";

export const carsRouter = Router();

carsRouter
    .post('/add/:id', verifyUser, addCar)
    .post('/getSearchCars', getSearchCars)
    .get('/getAllCars', getAllCars)
    .get('/getOneCar/:id', getOneCarById)
    .get('/getUsersCars/:id', verifyUser, getUsersCars)
    .delete('/delete/:id/:carId', verifyAdmin, deleteOneCar);