import {ImageEntity} from "../types";
import {ValidationError} from "../utils/errors";
import {v4 as uuid} from "uuid";
import {pool} from "../utils/db";

export class ImageRecord implements ImageEntity {
    id?: string;
    url: string;
    carId: string;

    constructor(obj: ImageEntity) {
        if(!obj.url || obj.url.length > 255) {
            throw new ValidationError('Adres url nie może zawierać więcej niż 255 znaków');
        }
        this.id = obj.id;
        this.url = obj.url;
        this.carId = obj.carId;
    }

    async insert(): Promise<string> {
        if(!this.id) {
            this.id = uuid();
        }
        await pool.execute("INSERT INTO `images` VALUES(:id, :url, :carId)", {
            id: this.id,
            url: this.url,
            carId: this.carId,
        });
        return this.id;
    }
}