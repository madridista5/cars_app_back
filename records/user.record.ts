import { UserEntity } from "../types";
import {ValidationError} from "../utils/errors";

export class UserRecord implements UserEntity {
    id: string;
    email: string;
    hashPwd: string;
    role: string;
    phoneNum: number;
    address: string;
    lat: number;
    lon: number;

    constructor(obj: UserEntity) {
        if(!obj.email || obj.email.length > 255) {
            throw new ValidationError('Email musi zawierać znak @, oraz nie może mieć więcej niż 255 znaków.');
        }

        if(!obj.phoneNum || String(obj.phoneNum).length > 9) {
            throw new ValidationError('Numer telefonu nie może przekraczać 9 cyfr.');
        }

        if(!obj.address && obj.address.length > 255) {
            throw new ValidationError('Adres nie może przekraczać 255 znaków.');
        }

        if(typeof obj.lon !== 'number' || typeof obj.lat !== 'number') {
            throw new ValidationError('Nie można zlokalizować ogłoszenia.');
        }

        this.id = obj.id;
        this.email = obj.email;
        this.hashPwd = obj.hashPwd;
        this.role = obj.role;
        this.phoneNum = obj.phoneNum;
        this.address = obj.address;
        this.lat = obj.lat;
        this.lon = obj.lon;
    }
}