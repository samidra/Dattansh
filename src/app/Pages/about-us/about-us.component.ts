import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OurServiceComponent } from "../../our-service/our-service.component";

@Component({
  selector: 'app-about-us',
  imports: [OurServiceComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

constructor(private router: Router,){}
  route_to_page(page_name:any) {
    this.router.navigate([page_name]);
    window.scrollTo(0, 0);
  }
}
