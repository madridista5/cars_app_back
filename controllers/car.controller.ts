import {NextFunction, Request, Response} from "express";
import {CarRecord} from "../records/car.record";

export const addCar = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newCar = new CarRecord({
            bodyStyle: req.body.bodyStyle,
            brand: req.body.brand,
            model: req.body.model,
            price: req.body.price,
            year: req.body.year,
            distance: req.body.distance,
            fuelType: req.body.fuelType,
            userId: req.params.id,
        });
        await newCar.insert();
        res.status(201).send(`Samochód ${req.body.brand} ${req.body.model} został dodany.`);
    } catch (err) {
        res.send('Przepraszamy, nie udało sie dodać ogłoszenia. Spróbuj za jakiś czas...');
        next(err);
    }
}

export const getSearchCars = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {bodyStyle, brand, model, priceStart, priceEnd, yearStart, yearEnd, fuelType, distanceStart, distanceEnd} = req.body;
        const cars = await CarRecord.getSearchCars(bodyStyle, brand, model, priceStart, priceEnd, yearStart, yearEnd, fuelType, distanceStart, distanceEnd);
        res.status(200).send(cars);
    } catch (err) {
        next(err);
    }
}