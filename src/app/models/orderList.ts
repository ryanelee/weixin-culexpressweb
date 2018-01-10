import { Order } from './order';

export class OrderList {
    public trackingNumber?: string;
    public shipDate?: string;
    public usedTimeString?: string;
    public data?: Array<Order>;
};
