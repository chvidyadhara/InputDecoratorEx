import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServPtoCService {
  url="https://api.mlab.com/api/1/databases/restcountries/collections/routparams?apiKey=NwUz6Go9-PSOYsRJS9tLR-p5idELeFx1";
  constructor(private http:HttpClient) { }
    produlist(){
       return this.http.get(this.url);
    }
}
