export interface UserEntity {
    id?: string,
    email: string,
    hashPwd: string,
    role?: string,
    phoneNum: number,
    address: string,
    lat: number,
    lon: number,
    currentTokenId?: string,
}

export type UserLoginResponse = {
    id: string,
    email: string,
    role: string,
    phoneNum: number,
    address: string,
    lat: number,
    lon: number,
}