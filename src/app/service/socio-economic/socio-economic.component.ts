import { Component } from '@angular/core';
import { OurServiceComponent } from "../../our-service/our-service.component";
import { ResourceComponent } from "../../resource/resource.component";

@Component({
  selector: 'app-socio-economic',
  imports: [OurServiceComponent, ResourceComponent],
  templateUrl: './socio-economic.component.html',
  styleUrl: './socio-economic.component.scss'
})
export class SocioEconomicComponent {

}
