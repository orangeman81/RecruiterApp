export class Record {
  constructor(
    public _id?: string,
    public name: string = "",
    public description?: string,
    public value?: number,
    public type?: string,
    public code?: string
  ) {}
}
