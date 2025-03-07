import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatWiseSurveyComponent } from './seat-wise-survey.component';

describe('SeatWiseSurveyComponent', () => {
  let component: SeatWiseSurveyComponent;
  let fixture: ComponentFixture<SeatWiseSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeatWiseSurveyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeatWiseSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
