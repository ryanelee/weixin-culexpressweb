import { Tracking } from './tracking';

export class TrackingHistory {
    public trackingNumber?: string;
    public shipDate?: string;
    public usedTimeString?: string;
    public status?: string;
    public data?: Array<Tracking>;
};
