import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
const BACKEND_URL=environment.apiUrl
@Injectable({
  providedIn: 'root'
})
export class UsagerService {

  constructor(private http:HttpClient) { }


  addUsagers(usagerData:any){
    return this.http.post(BACKEND_URL+"usagers",usagerData)
  }
}
