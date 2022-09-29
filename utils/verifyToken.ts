import jwt, {JwtPayload} from 'jsonwebtoken';
import {NextFunction, Request, Response} from "express";
import {createError} from "./error";
import {config} from "../config/config";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.access_token;
    if (!token) {
        return next(createError(401, "Nie zostałeś uwierzytelniony."));
    }

    jwt.verify(token, config.secretKey, (err: Error, user: JwtPayload) => {
        if (err) {
            return next(createError(403, 'token jest niewazny'));
        }
        // @ts-ignore
        req.user = user;
        next();
    })
};

export const verifyUser = (req: Request, res: Response, next: NextFunction) => {
    verifyToken(req, res, () => {
        try {
            // @ts-ignore
            if (req.user.id === req.params.id || req.user.role === 'ADMIN') {
                next();
            }
        } catch (err) {
            if (err) return next(createError(403, 'Nie zostałeś zautoryzowany.'));
        }
    });
};

export const verifyAdmin = (req: Request, res: Response, next: NextFunction) => {
    verifyToken(req, res, () => {
        try {
            // @ts-ignore
            if (req.user.role === 'ADMIN') {
                next();
            }
        } catch (err) {
            if (err) return next(createError(403, 'Nie zostałeś zautoryzowany.'));
        }
    });
};