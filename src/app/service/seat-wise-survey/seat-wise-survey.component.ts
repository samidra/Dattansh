import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OurServiceComponent } from "../../our-service/our-service.component";
import { ResourceComponent } from "../../resource/resource.component";

@Component({
  selector: 'app-seat-wise-survey',
  imports: [OurServiceComponent, ResourceComponent],
  templateUrl: './seat-wise-survey.component.html',
  styleUrl: './seat-wise-survey.component.scss'
})
export class SeatWiseSurveyComponent {

  constructor(private router: Router,){}
  
    route_to_page(page_name:any) {
      this.router.navigate([page_name]);
      window.scrollTo(0, 0);
    }
    
}
