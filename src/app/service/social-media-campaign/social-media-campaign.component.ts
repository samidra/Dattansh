import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OurServiceComponent } from "../../our-service/our-service.component";
import { ResourceComponent } from "../../resource/resource.component";

@Component({
  selector: 'app-social-media-campaign',
  imports: [OurServiceComponent, ResourceComponent],
  templateUrl: './social-media-campaign.component.html',
  styleUrl: './social-media-campaign.component.scss'
})
export class SocialMediaCampaignComponent {

  constructor(private router: Router,){}
  
    route_to_page(page_name:any) {
      this.router.navigate([page_name]);
      window.scrollTo(0, 0);
    }
    
}
