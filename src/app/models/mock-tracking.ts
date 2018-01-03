import { TrackingHistory } from './trackingHistory';
import { Tracking } from './tracking';

export const TrackingHistoryMocks: TrackingHistory[] = [{
    trackingNumber: 'CUL100210148',
    shipDate: (new Date('2017-06-17T19:12:49.000Z')).toLocaleString(),
    usedTimeString: '199天12小时',
    data: [
        {
            arrivedDate: null,
            code: '103',
            description: null,
            eventCode: 103,
            icon: 'fa-truck',
            note: '完成出库操作，发往机场',
            operationDate: (new Date('2017-06-17T19:12:49.000Z')).toLocaleString(),
            operationUser: '出库人员',
            show: true,
            status: 'Shipped',
            warehouseName: '美国特拉华(DE)仓库'
        },
        {
            arrivedDate: null,
            code: '102',
            description: null,
            eventCode: 102,
            icon: 'fa-dropbox',
            note: '宝贝已经装袋扫描，出库中',
            operationDate: (new Date('2017-04-17T03:14:08.000Z')).toLocaleString(),
            operationUser: '出库人员',
            show: true,
            status: 'Shipped',
            warehouseName: '美国特拉华(DE)仓库'
        },
        {
            arrivedDate: null,
            code: '102',
            description: '<p>包裹实际重量<span class=\'highlight\'>5.2磅</span></p>',
            eventCode: 101,
            icon: 'fa-dropbox',
            note: '完成称重，已计算出运费',
            operationDate: (new Date('2017-04-17T03:14:08.000Z')).toLocaleString(),
            operationUser: '出库人员',
            show: true,
            status: 'Shipped',
            warehouseName: '美国特拉华(DE)仓库'
        },
        {
            arrivedDate: null,
            code: '102',
            description: null,
            eventCode: 102,
            icon: 'fa-dropbox',
            note: '支付线上订单',
            operationDate: (new Date('2017-04-17T03:13:08.000Z')).toLocaleString(),
            operationUser: '出库人员',
            show: true,
            status: 'Shipped',
            warehouseName: '美国特拉华(DE)仓库'
        },
    ]
}];
