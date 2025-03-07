import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticalResearchComponent } from './political-research.component';

describe('PoliticalResearchComponent', () => {
  let component: PoliticalResearchComponent;
  let fixture: ComponentFixture<PoliticalResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliticalResearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliticalResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
