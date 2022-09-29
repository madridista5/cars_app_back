export interface CarEntity {
    id?: string,
    bodyStyle: string,
    brand: string,
    model: string,
    price: number,
    year: number,
    distance: number,
    fuelType: string,
    userId: string,
    city: string,
    profilePhotoUrl: string,
}

export type CarListResponse = CarEntity[];
export type SingleCarResponse = CarEntity;