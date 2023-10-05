import { Component } from '@angular/core';

import { ServiceCardsService } from 'src/app/services/service-cards.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  
  constructor( public _service: ServiceCardsService) { }

}
