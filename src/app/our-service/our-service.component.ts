import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-service',
  imports: [],
  templateUrl: './our-service.component.html',
  styleUrl: './our-service.component.scss'
})
export class OurServiceComponent {


  constructor(private router: Router){
    }
  route_to_page(page_name:any) {
    this.router.navigate([page_name]);
    window.scrollTo(0, 0);
  }

}
