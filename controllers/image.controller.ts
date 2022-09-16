import {NextFunction, Request, Response} from "express";
import {ImageRecord} from "../records/image.record";

export const addImage = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newImage = new ImageRecord({
            url: req.body.url,
            carId: req.params.carId,
        });
        await newImage.insert();
        res.status(201).send('Zdjęcie zostało dodane.');
    } catch (err) {
        res.send('Przepraszamy, nie udało się dodać zdjęcia. Spróbuj ponownie za kilka minut...');
        next(err);
    }
}