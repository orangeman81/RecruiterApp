import { DataShape } from "./DataShape";

export class RequestDTO {
  name: string;
  position: string;
  seniority: string;
  skills: string;
  location: string;
}

export interface Request extends RequestDTO, DataShape {}
