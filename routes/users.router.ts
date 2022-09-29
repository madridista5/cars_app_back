import {Router} from "express";
import {getOneUserById} from "../controllers/user.controller";

export const usersRouter = Router();

usersRouter
    .get('/getOneUser/:id', getOneUserById);