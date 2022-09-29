import {NextFunction, Request, Response} from "express";
import {UserRecord} from "../records/user.record";
import bcrypt from 'bcryptjs';
import {ValidationError} from "../utils/errors";
import jwt from 'jsonwebtoken';
import {config} from "../config/config";

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await UserRecord.getAllUsers();
        const checkEmail = users.some(user => user.email === req.body.email);
        if (checkEmail) {
            res.send(`Rejestracja nie powiodła się, ponieważ konto dla adresu email: "${req.body.email}" jest już założone w serwisie.`);
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
        res.status(201).send(`Konto dla użytkownika "${req.body.email}" zostało utworzone. Zaloguj się, aby korzystać z aplikacji.`);
    } catch (err) {
        next(err);
    }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await UserRecord.getOneUserByEmail(req.body.email);
        if(!user) {
            res.send({
                info: `W serwisie nie ma założonego konta dla adresu email: "${req.body.email}"`,
            });
            throw new ValidationError(`W serwisie nie ma założonego konta dla adresu email: "${req.body.email}"`);
        }
        const isPassCorrect = await bcrypt.compare(req.body.pwd, user.hashPwd);
        if(!isPassCorrect) {
            res.send({
                info: 'Logowanie nie powiodło się. Hasło jest nieprawidłowo.',
            });
            throw new ValidationError(`Hasło jest nieprawidłowe.`);
        }

        const token = jwt.sign({id: user.id, role: user.role, email: user.email}, config.secretKey);
        await user.updateOne(user.id, token);
        const {hashPwd, currentTokenId, ...otherDetails} = user;

        res
            .cookie('access_token', token, {
                secure: false, // w wersji produkcyjnej (https) ustawiamy true
                domain: config.domain,
                httpOnly: true,
            })
            .status(200)
            .send({
                ...otherDetails,
                info: 'Jesteś zalogowany. Zapraszamy do korzsytania z aplikacji.',
            });
    } catch (err) {
        next(err);
    }
}

export const logout = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // @ts-ignore
        const user = await UserRecord.getOneUserByEmail(req.user.email);
        // @ts-ignore
        await user.updateOne(req.user.id, null);


        res.clearCookie(
            "access_token",
            {
                secure: false,
                domain: config.domain,
                httpOnly: true,
            }
        );
        res.send('Użytkownik zostal wylogowany.');
    } catch (err) {
        next(err);
    }
}