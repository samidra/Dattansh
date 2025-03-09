import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OurServiceComponent } from "../../our-service/our-service.component";
import { ResourceComponent } from "../../resource/resource.component";

@Component({
  selector: 'app-election-campaign-management',
  imports: [OurServiceComponent, ResourceComponent],
  templateUrl: './election-campaign-management.component.html',
  styleUrl: './election-campaign-management.component.scss'
})
export class ElectionCampaignManagementComponent {

  constructor(private router: Router,){}

  route_to_page(page_name:any) {
    this.router.navigate([page_name]);
    window.scrollTo(0, 0);
  }

}
