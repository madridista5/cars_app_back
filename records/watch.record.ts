import {WatchEntity} from "../types";
import {v4 as uuid} from "uuid";
import {pool} from "../utils/db";

export class WatchRecord implements WatchEntity {
    id?: string;
    userId: string;
    carId: string;

    constructor(obj: WatchEntity) {
        this.id = obj.id;
        this.userId = obj.userId;
        this.carId = obj.carId;
    }

    async insert(): Promise<string> {
        if(!this.id) {
            this.id = uuid();
        }

        await pool.execute("INSERT INTO `watch` VALUES(:id, :userId, :carId)", {
            id: this.id,
            userId: this.userId,
            carId: this.carId,
        });
        return this.id;
    }
}