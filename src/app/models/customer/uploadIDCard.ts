export interface UploadIDCardModel {
    authType?: string;
    twOrder?: string;
    trackingNumber?: string;
    cellphoneNumber?: string;
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
