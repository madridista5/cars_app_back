import {NextFunction, Request, Response} from "express";
import {UserRecord} from "../records/user.record";

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newUser = new UserRecord({
            email: req.body.email,
            hashPwd: req.body.pwd,
            phoneNum: req.body.phoneNum,
            address: req.body.address,
            lat: req.body.lat,
            lon: req.body.lon,
        });
        await newUser.insert();
        res.status(201).send(`Konto dla użytkownika "${req.body.email}" zostało utworzone.`);
    } catch (err) {
        next(err);
    }
}