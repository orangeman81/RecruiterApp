import { DataShape } from "./DataShape";

export class Resource {
  name: string = "Resource fullname";
  address: string = "";
  phone: string = "+39";
  email: string = "";
  education: string = "";
  position: string = "";
  skills: string = "Resource skills";
  hiredOn: string = "";
  rating: number = 0;

  constructor(resource?: ResourceDTO) {
    if (resource) {
      this.name = resource.name;
      this.address = resource.address;
      this.phone = resource.phone;
      this.email = resource.email;
      this.education = resource.education;
      this.position = resource.position;
      this.skills = resource.skills;
      this.hiredOn = resource.hiredOn;
      this.rating = resource.rating;
    }
  }
}

export interface ResourceDTO extends Resource, DataShape {}
