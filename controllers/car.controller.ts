import {NextFunction, Request, Response} from "express";
import {CarRecord} from "../records/car.record";
import {UserRecord} from "../records/user.record";

export const addCar = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await UserRecord.getOneUserById(req.params.id);
        const cityName = user.address.split(',')[0];
        const newCar = new CarRecord({
            bodyStyle: req.body.bodyStyle,
            brand: req.body.brand,
            model: req.body.model,
            price: req.body.price,
            year: req.body.year,
            distance: req.body.distance,
            fuelType: req.body.fuelType,
            userId: req.params.id,
            city: cityName,
            profilePhotoUrl: req.body.profilePhotoUrl,
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

export const getOneCarById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const car = await CarRecord.getOneCarById(req.params.id);
        res.status(200).send(car);
    } catch (err) {
        next(err);
    }
}

export const getUsersCars = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const cars = await CarRecord.getUsersCars(req.params.id);
        res.status(200).send(cars);
    } catch (err) {
        next(err);
    }
}

export const getAllCars = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const cars = await CarRecord.getAllCars();
        res.status(200).send(cars);
    } catch (err) {
        next(err);
    }
}

export const deleteOneCar = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const carToDelete = await CarRecord.getOneCarById(req.params.carId);
        if(!carToDelete) {
            res.status(200).send('Nie ma takiego ogłoszenia.');
            return;
        }
        await CarRecord.deleteOneCar(req.params.carId);
        res.status(200).send(`Ogłoszenie samochodu "${carToDelete.brand} ${carToDelete.model}" zostało usunięte.`);
    } catch (err) {
        next(err);
    }
}