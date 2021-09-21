export class Compute {
    private _isTurnedOn = false;

    constructor () {
      this._isTurnedOn = true;
    }

    public get isTurnedOn (): boolean {
      return this._isTurnedOn;
    }

    public sum (numA: number, numB: number): number {
      return numA + numB;
    }

    public sub (numA: number, numB: number): number {
      return numA - numB;
    }
}
