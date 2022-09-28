import {Router} from "express";
import {verifyUser} from "../utils/verifyToken";
import {addWatch, deleteOneWatch, getAllWatchByUserId} from "../controllers/watch.controller";

export const watchRouter = Router();

watchRouter
    .post('/add/:id', verifyUser, addWatch)
    .get('/allWatch/:id', verifyUser, getAllWatchByUserId)
    .delete('/delete/:id/:carId', verifyUser, deleteOneWatch);