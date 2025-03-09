import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioEconomicComponent } from './socio-economic.component';

describe('SocioEconomicComponent', () => {
  let component: SocioEconomicComponent;
  let fixture: ComponentFixture<SocioEconomicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocioEconomicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocioEconomicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
