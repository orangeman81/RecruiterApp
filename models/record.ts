import { DataShape } from "./DataShape";

export class RecordDTO {
  constructor(
    public name: string = "",
    public description?: string,
    public value?: number,
    public type?: string,
    public code?: string
  ) {}
}

export interface Record extends RecordDTO, DataShape {}
