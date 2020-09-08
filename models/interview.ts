import { DataShape } from "./DataShape";

export class Interview {
  resourceId: string;
  description: string;
  rating: number;
}

export interface InterviewDTO extends Interview, DataShape {}
