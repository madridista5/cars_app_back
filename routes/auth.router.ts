import {Router} from "express";
import {login, logout, register} from "../controllers/auth.controller";
import {verifyToken} from "../utils/verifyToken";

export const authRouter = Router();

authRouter
    .post('/register', register)
    .post('/login', login)
    .get('/logout', verifyToken, logout);