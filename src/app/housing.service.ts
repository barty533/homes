import { Injectable } from '@angular/core';
import { Housinflocation } from './housinflocation';
@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  constructor() { }
  async getAllHousingLocations() : Promise<Housinflocation[]>{
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
 async getHousingLocationById(id: Number):Promise <Housinflocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  };
  submitApplication(firstName: string, lastName: string, email: string){
    console.log(firstName,lastName,email)
  }
}

