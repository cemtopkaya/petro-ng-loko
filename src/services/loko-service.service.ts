import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Lokomotif } from '../models/lokomotif'


const URL_LOKO_LIST = "http://213.155.114.34:4004/LokoList/ListeGetir"

@Injectable()
export class LokoServiceService {

  constructor(private httpClient: HttpClient) { }

  public getLokoList() {
    let bodyJson = { "BasTarih": "2019-5-5", "BitTarih": "2019-5-12" }
    let bodyForm = "BasTarih=2019-5-5&BitTarih=2019-5-12"
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'Origin':'213.155.114.34:4004' })
    };
    return this.httpClient.post(`${URL_LOKO_LIST}`, bodyForm, httpOptions);
  }

}