import {Router} from "express";
import {addImage, getImagesByCarId} from "../controllers/image.controller";
import {verifyUser} from "../utils/verifyToken";

export const imagesRouter = Router();

imagesRouter
    .post('/add/:id/:carId', verifyUser, addImage)
    .get('/getImages/:carId', getImagesByCarId);