import { DataShape } from "./DataShape";

export class SkillDTO {
  name: string;
  description: string;
}

export interface Skill extends SkillDTO, DataShape {}
