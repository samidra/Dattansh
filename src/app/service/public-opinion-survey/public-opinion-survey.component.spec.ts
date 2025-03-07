import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicOpinionSurveyComponent } from './public-opinion-survey.component';

describe('PublicOpinionSurveyComponent', () => {
  let component: PublicOpinionSurveyComponent;
  let fixture: ComponentFixture<PublicOpinionSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicOpinionSurveyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicOpinionSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
