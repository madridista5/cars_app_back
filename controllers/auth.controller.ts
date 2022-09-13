import {NextFunction, Request, Response} from "express";
import {UserRecord} from "../records/user.record";
import bcrypt from 'bcryptjs';
import {ValidationError} from "../utils/errors";

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await UserRecord.getAllUsers();
        const checkEmail = users.some(user => user.email === req.body.email);
        if (checkEmail) {
            throw new ValidationError(`Konto dla adresu email: "${req.body.email}" jest już założone w serwisie.`);
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.pwd, salt);

        const newUser = new UserRecord({
            email: req.body.email,
            hashPwd: hash,
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