import { Skill } from "./skill";

export interface Resource {
    name: string;
    address: string;
    phone: string;
    email: string;
    education: string;
    position: string;
    skills: Skill[];
    hiredOn: string;
    rating: number;
}