import { DataShape } from "./DataShape";

export class Record {
  constructor(
    public name: string = "",
    public description?: string,
    public value?: number,
    public type?: string,
    public code?: string
  ) {}
}

export interface RecordDTO extends Record, DataShape {}
