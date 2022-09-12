import {ImageEntity} from "../types";
import {ValidationError} from "../utils/errors";

export class ImageRecord implements ImageEntity {
    id: string;
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
}