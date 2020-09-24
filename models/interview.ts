import { DataShape } from "./DataShape";

export class InterviewDTO {
  name: string;
  resourceId: string;
  description: string;
  rating: number;
}

export interface Interview extends InterviewDTO, DataShape {}
