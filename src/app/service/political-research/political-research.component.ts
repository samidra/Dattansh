import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OurServiceComponent } from "../../our-service/our-service.component";
import { ResourceComponent } from "../../resource/resource.component";

@Component({
  selector: 'app-political-research',
  imports: [OurServiceComponent, ResourceComponent],
  templateUrl: './political-research.component.html',
  styleUrl: './political-research.component.scss'
})
export class PoliticalResearchComponent {

  constructor(private router: Router,){}
  
    route_to_page(page_name:any) {
      this.router.navigate([page_name]);
      window.scrollTo(0, 0);
    }
    
}
