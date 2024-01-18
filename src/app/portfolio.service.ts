import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Portfoliocont } from './portfoliocont';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private baseURL="http://localhost:9091";

  constructor(private httpClient:HttpClient) { }


  insertValues(portfoliocont:Portfoliocont) : Observable<Portfoliocont>{
    return this.httpClient.post<Portfoliocont>(`${this.baseURL}/contact/insertContact`,portfoliocont);
  }
}
