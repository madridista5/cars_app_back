import {NextFunction, Request, Response} from "express";
import {UserRecord} from "../records/user.record";

export const getOneUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await UserRecord.getOneUserById(req.params.id);
        const {hashPwd, currentTokenId, ...otherDetails} = user;
        res.status(200).send(otherDetails);
    } catch (err) {
        next(err);
    }
}