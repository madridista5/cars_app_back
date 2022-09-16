import {CarEntity} from "../types";
import {ValidationError} from "../utils/errors";
import {v4 as uuid} from 'uuid';
import {pool} from "../utils/db";

export class CarRecord implements CarEntity {
    id?: string;
    bodyStyle: string;
    brand: string;
    model: string;
    price: number;
    distance: number;
    fuelType: string;
    userId: string;

    constructor(obj: CarEntity) {
        if(!obj.bodyStyle || obj.bodyStyle.length > 12) {
            throw new ValidationError('Typ nadwozia nie może mieć więcej niż 12 znaków.');
        }

        if(!obj.brand || obj.brand.length > 255) {
            throw new ValidationError('Marka nie może mieć więcej niż 255 znaków.');
        }

        if(!obj.model || obj.model.length > 255) {
            throw new ValidationError('Model nie może mieć więcej niż 255 znaków.');
        }

        if(!obj.price || String(obj.price).length > 11) {
            throw new ValidationError('Cena nie może mieć więcej niż 11 cyfr');
        }

        if(!obj.distance || String(obj.distance).length > 11) {
            throw new ValidationError('Przebieg nie może mieć więcej niż 11 cyfr');
        }

        if(!obj.fuelType || obj.fuelType.length > 20) {
            throw new ValidationError('Typ paliwa nie może mieć więcej niz 20 znaków');
        }

        this.id = obj.id;
        this.bodyStyle = obj.bodyStyle;
        this.brand = obj.brand;
        this.model = obj.model;
        this.price = obj.price;
        this.distance = obj.distance;
        this.fuelType = obj.fuelType;
        this.userId = obj.userId;
    }

    async insert(): Promise<string> {
        if(!this.id) {
            this.id = uuid();
        }

        await pool.execute("INSERT INTO `cars` VALUES (:id, :bodyStyle, :brand, :model, :price, :distance, :fuelType, :userId)", {
            id: this.id,
            bodyStyle: this.bodyStyle,
            brand: this.brand,
            model: this.model,
            price: this.price,
            distance: this.distance,
            fuelType: this.fuelType,
            userId: this.userId,
        });
        return this.id;
    }
}