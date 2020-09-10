import { DataShape } from "./DataShape";

export class Request {
  name: string;
  position: string;
  seniority: string;
  skills: string;
  location: string;
}

export interface RequestDTO extends Request, DataShape {}
