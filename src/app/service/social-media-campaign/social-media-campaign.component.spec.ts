import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaCampaignComponent } from './social-media-campaign.component';

describe('SocialMediaCampaignComponent', () => {
  let component: SocialMediaCampaignComponent;
  let fixture: ComponentFixture<SocialMediaCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaCampaignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
