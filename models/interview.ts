import { DataShape } from "./DataShape";

export class Interview {
  name: string;
  resourceId: string;
  description: string;
  rating: number;
}

export interface InterviewDTO extends Interview, DataShape {}
