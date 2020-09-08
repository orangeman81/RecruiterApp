import { DataShape } from "./DataShape";

export class Skill {
  name: string;
  description: string;
}

export interface SkillDTO extends Skill, DataShape {}
