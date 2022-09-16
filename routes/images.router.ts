import {Router} from "express";
import {addImage} from "../controllers/image.controller";

export const imagesRouter = Router();

imagesRouter
    .post('/add/:id/:carId', addImage);