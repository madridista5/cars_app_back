import {Router} from "express";
import {verifyUser} from "../utils/verifyToken";
import {addWatch} from "../controllers/watch.controller";

export const watchRouter = Router();

watchRouter
    .post('/add/:id', verifyUser, addWatch);