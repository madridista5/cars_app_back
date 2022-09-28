export interface WatchEntity {
    id?: string,
    userId: string,
    carId: string,
}

export type WatchRecordResponse = WatchEntity[];
export type SingleWatchRecordResponse = WatchEntity;