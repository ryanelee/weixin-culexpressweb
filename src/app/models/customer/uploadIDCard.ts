export interface UploadIDCardModel {
    authType?: string;
    twOrder?: string;
    trackingNumber?: string;
    celphoneNumber?: string;
    telephoneNumber?: string;
    receivePersonName?: string;
    emailAddress?: string;
    idCard?: string;
    idCardFrontImage?: string;
    idCardBackImage?: string;
    urls?: Array<string>;
    deadline?: Date;
    idForever?: string;
    note?: string
}
