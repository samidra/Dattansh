import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionCampaignManagementComponent } from './election-campaign-management.component';

describe('ElectionCampaignManagementComponent', () => {
  let component: ElectionCampaignManagementComponent;
  let fixture: ComponentFixture<ElectionCampaignManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectionCampaignManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectionCampaignManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
