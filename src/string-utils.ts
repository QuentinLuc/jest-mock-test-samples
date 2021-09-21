export default class StringUtils {

    private readonly _v: string;

    constructor(){
        this._v = '1.2';
    }

    get v(): string {
        return this._v;
    }

    merge(strA: string, strB: string): string {
        return strA + strB;
    }
}