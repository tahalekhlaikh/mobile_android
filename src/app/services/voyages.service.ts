import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
const BACKEND_URL=environment.apiUrl
@Injectable({
  providedIn: 'root'
})
export class VoyagesService {

  constructor(private http:HttpClient) { }

  getAllVoyages(){
    return this.http.get(BACKEND_URL+"voyages")
  }
  getVoyageBySearch(info: any) {
    let httpParams = new HttpParams(info)
        .set("dateDepart",info.dateDepart)
        .set("stationDep", info.stationDep)
        .set("stationArr",info.stationArr)
        .set("transport", info.transport)
    return this.http.get(BACKEND_URL+"searchVoyages",{params:httpParams})
  }
}
