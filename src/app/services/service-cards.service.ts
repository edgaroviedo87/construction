import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { IServiceCard } from "../interfaces/service-card-interface";

@Injectable({
  providedIn: 'root'
})
export class ServiceCardsService {

  serviceCards: any = [];

  constructor(private http: HttpClient) {
    this.cargarServiceCards();
  }

  private cargarServiceCards() {
    this.http.get('assets/data/service-cards.json')
             .subscribe((resp: IServiceCard) => {
                this.serviceCards = resp;
             });
  }

}
