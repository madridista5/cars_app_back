import { UserEntity } from "../types";
import {ValidationError} from "../utils/errors";
import {v4 as uuid} from 'uuid';
import {pool} from "../utils/db";
import {FieldPacket} from "mysql2";

type UserRecordResults = [UserRecord[], FieldPacket[]];

export class UserRecord implements UserEntity {
    id?: string;
    email: string;
    hashPwd: string;
    role?: string;
    phoneNum: number;
    address: string;
    lat: number;
    lon: number;
    currentTokenId?: string;

    constructor(obj: UserEntity) {
        if(!obj.email || obj.email.length > 255) {
            throw new ValidationError('Email musi zawierać znak @, oraz nie może mieć więcej niż 255 znaków.');
        }

        if(!obj.phoneNum || String(obj.phoneNum).length > 9) {
            throw new ValidationError('Numer telefonu nie może przekraczać 9 cyfr.');
        }

        if(!obj.address || obj.address.length > 255) {
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
        this.currentTokenId = obj.currentTokenId;
    }

    async insert(): Promise<string> {
        if(!this.id) {
            this.id = uuid();
            this.role = 'USER';
            this.currentTokenId = null;
        } else {
            throw new ValidationError('Ten użytkownik jest już zarejestrowany.');
        }
        await pool.execute("INSERT INTO `users` VALUES (:id, :email, :hashPwd, :role, :phoneNum, :address, :lat, :lon, :currentTokenId)", {
            id: this.id,
            email: this.email,
            hashPwd: this.hashPwd,
            role: this.role,
            phoneNum: this.phoneNum,
            address: this.address,
            lat: this.lat,
            lon: this.lon,
            currentTokenId: this.currentTokenId,
        });
        return this.id;
    }

    async updateOne(id: string, token: string) {
        await pool.execute("UPDATE `users` SET `currentTokenId` = :token WHERE `id` = :id", {
            id,
            token,
        });
    }

    static async getAllUsers(): Promise<UserRecord[]> {
        const [results] = await pool.execute("SELECT * FROM `users`") as UserRecordResults;
        return results.map(user => new UserRecord(user));
    }

    static async getOneUserByEmail(email: string): Promise<UserRecord> {
        const [results] = await pool.execute("SELECT * FROM `users` WHERE `email` = :email", {
            email,
        }) as UserRecordResults;
        return results.length > 0 ? new UserRecord(results[0]) : null;
    }

    static async getOneUserById(id: string): Promise<UserRecord> {
        const [results] = await pool.execute("SELECT * FROM `users` WHERE `id` = :id", {
            id,
        } ) as UserRecordResults;
        return new UserRecord(results[0]);
    }
}