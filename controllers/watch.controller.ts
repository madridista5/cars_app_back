import {NextFunction, Request, Response} from "express";
import {WatchRecord} from "../records/watch.record";
import {SingleWatchRecordResponse} from "../types";

export const addWatch = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const check: SingleWatchRecordResponse = await WatchRecord.getOneWatchByUserIdAndCarId(req.body.userId, req.body.carId);
        if(check) {
            res.status(200).send('Ten pojazd już znajudje się na liście Twoich "obserwowanych".');
            return;
        }
        const newWatch = new WatchRecord({
            userId: req.body.userId,
            carId: req.body.carId,
        });
        await newWatch.insert();
        res.status(200).send('Pojazd został doddany do Twoich "obserwowanych".');
    } catch (err) {
        next(err);
    }
};

export const getAllWatchByUserId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const watched = await WatchRecord.getAllWatchByUserId(req.params.id);
        res.status(200).send(watched);
    } catch (err) {
        next(err);
    }
}

export const deleteOneWatch = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const watchToDelete = await WatchRecord.getOneWatchByUserIdAndCarId(req.params.id, req.params.carId);
        if(!watchToDelete) {
            res.status(200).send('Na liście Twoich "Obserwowanych" nie ma takiego pojazdu.');
            return;
        }
        await watchToDelete.deleteOneWatch(req.params.id, req.params.carId);
        res.status(200).send('Pojazd został usunięty z listy Twoich "Obserwowanych".');
    } catch (err) {
        next(err);
    }
}