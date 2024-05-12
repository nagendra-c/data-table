import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    moviesApi:string = 'https://restcountries.com/v3.1/all?fields=name,capital,currencies';

  constructor(private http:HttpClient) { }
getMoviesApi(){
  return this.http.get(this.moviesApi);
}
  
}
