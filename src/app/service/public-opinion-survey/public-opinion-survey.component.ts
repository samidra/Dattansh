import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OurServiceComponent } from "../../our-service/our-service.component";
import { ResourceComponent } from "../../resource/resource.component";

@Component({
  selector: 'app-public-opinion-survey',
  imports: [OurServiceComponent, ResourceComponent],
  templateUrl: './public-opinion-survey.component.html',
  styleUrl: './public-opinion-survey.component.scss'
})
export class PublicOpinionSurveyComponent {

  constructor(private router: Router,){}
  
    route_to_page(page_name:any) {
      this.router.navigate([page_name]);
      window.scrollTo(0, 0);
    }
    
}
