import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
const BACKEND_URL=environment.apiUrl
@Injectable({
  providedIn: 'root'
})
export class StationsService {

  constructor(private httpClient:HttpClient) { }


  getAllStations() {
    return this.httpClient.get(BACKEND_URL+"stations")
  }
}
