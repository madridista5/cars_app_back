import {NextFunction, Request, Response} from "express";
import {CarRecord} from "../records/car.record";

export const addCar = (req: Request, res: Response, next: NextFunction) => {
    try {
        const newCar = new CarRecord({
            bodyStyle: req.body.bodyStyle,
            brand: req.body.brand,
            model: req.body.model,
            price: req.body.price,
            distance: req.body.distance,
            fuelType: req.body.fuelType,
            userId: req.params.id,
        });

        res.status(201).send(`Samochód ${req.body.brand} ${req.body.model} został dodany.`);
    } catch (err) {
        next(err);
    }
}