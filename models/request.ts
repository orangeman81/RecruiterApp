import { Skill } from "./skill";
import { DataShape } from "./DataShape";

export class Request {
  position: string;
  seniority: string;
  skills: Skill[];
}

export interface RequestDTO extends Request, DataShape {}
