import { Routes } from '@angular/router';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { SocialMediaCampaignComponent } from './service/social-media-campaign/social-media-campaign.component';
import { SeatWiseSurveyComponent } from './service/seat-wise-survey/seat-wise-survey.component';
import { ElectionCampaignManagementComponent } from './service/election-campaign-management/election-campaign-management.component';
import { PoliticalResearchComponent } from './service/political-research/political-research.component';
import { PublicOpinionSurveyComponent } from './service/public-opinion-survey/public-opinion-survey.component';
import { SocioEconomicComponent } from './service/socio-economic/socio-economic.component';


export const routes: Routes = [

    {
        path: '',
        component: HeaderFooterComponent,
        children: [
            {path: '', component: HomeComponent},
            {path:'about-us', component:AboutUsComponent},
            {path:'contact', component:ContactUsComponent},
            {path:'contact', component:ContactUsComponent},
            {path:'service/public-opinion-survey', component:PublicOpinionSurveyComponent},
            {path:'service/political-research', component:PoliticalResearchComponent},
            {path:'service/election-campaign-management', component:ElectionCampaignManagementComponent},
            {path:'service/seat-wise-survey', component:SeatWiseSurveyComponent},
            {path:'service/social-media-campaign', component:SocialMediaCampaignComponent},
            {path:'service/socio-economic-research', component:SocioEconomicComponent},
            { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect any unknown child routes to HomepageComponent
        ]
    },
    { path: '**', redirectTo: '' } // Fallback route for the main app
];
