
export class Tool {
    public static generateCode(): string {
        let code = '';
        const url = window.location.search;
        if (url.includes('code')) {
            if (url.replace('?', '').split('&')[0].indexOf('code') >= 0) {
                code = url.replace('?', '').split('&')[0].replace('code=', '');
            } else {
                code = url.replace('?', '').split('&')[1].replace('code=', '');
            }
        }

        return code;
    }

    public static orderStatus(status) {
        switch (status) {
            case 'Unpaid':
                return '待支付'
            case 'Processing':
                return '处理中'
            case 'WaybillUpdated':
                return '运单更新'
            case 'Void':
                return '已取消'
            case 'Arrears':
                return '运费不足'
            case 'Arrived':
                return '已送达'
            case 'Paid':
                return '已支付'
            case 'PartialShipped':
                return '部分出库'
            case 'Shipped':
                return '已出库'
            default:
                break;
        }
    }

    public static orderStatusClass(status) {
        switch (status) {
            case 'Unpaid':
                return 'label-warning'
            case 'Processing':
                return 'label-info'
            case 'WaybillUpdated':
                return 'label-info'
            case 'Void':
                return 'label-info'
            case 'Arrears':
                return 'label-danger'
            case 'Arrived':
                return 'label-success'
            case 'Paid':
                return 'label-success'
            case 'PartialShipped':
                return 'label-success'
            case 'Shipped':
                return 'label-success'
            default:
                break;
        }
    }

    public static pkgStatus(status) {
        switch (status) {
            case 'Init':
                return '未打包'
            case 'Packaged':
                return '已打包'
            case 'Shipped':
                return '已出库'
            case 'Send':
                return '送往机场'
            case 'Arrived':
                return '到达国内'
            default:
                break;
        }
    }

    public static pkgStatusClass(status) {
        switch (status) {
            case 'Init':
                return 'label-warning'
            case 'Packaged':
                return 'label-info'
            case 'Shipped':
                return 'label-danger'
            case 'Send':
                return 'label-info'
            case 'Arrived':
                return 'label-success'
            default:
                break;
        }
    }
}
