import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

/*export class CareerFrameworkBean {
  constructor(
    public businessResults  :string,
    public individualAchievements :string,
    public innovation :string,
    public skills:string,
    public responsabilityWithOthers:string) {

  }
}*/

@Injectable({
  providedIn: 'root'
})
export class ManageDimensionsServicesService {

  constructor(
    private http:HttpClient
  ) { }

  getDimensionsInfo() {
    return this.http.get<String []>('http://localhost:8090/getcareerinfo')
  }
}
