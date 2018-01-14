
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
}
