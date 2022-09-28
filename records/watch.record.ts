import {WatchEntity} from "../types";
import {v4 as uuid} from "uuid";
import {pool} from "../utils/db";
import {FieldPacket} from "mysql2";

type WatchRecordResults = [WatchRecord[], FieldPacket[]];

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

    static async getOneWatchByUserIdAndCarId(userId: string, carId: string): Promise<WatchRecord[]> {
        const [results] = await pool.execute("SELECT * FROM `watch` WHERE `userId` = :userId AND `carId` = :carId", {
            userId,
            carId,
        }) as WatchRecordResults;
        return results.map(watch => new WatchRecord(watch));
    }
}