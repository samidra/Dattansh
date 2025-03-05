import { Routes } from '@angular/router';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';


export const routes: Routes = [

    {
        path: '',
        component: HeaderFooterComponent,
        children: [
            {path: '', component: HomeComponent},
            {path:'about-us', component:AboutUsComponent},
            {path:'contact', component:ContactUsComponent},
            { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect any unknown child routes to HomepageComponent
        ]
    },
    { path: '**', redirectTo: '' } // Fallback route for the main app
];
