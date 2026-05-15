import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearAccordion } from './year-accordion.component';

describe('DegreeAccordion', () => {
  let component: YearAccordion;
  let fixture: ComponentFixture<YearAccordion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearAccordion],
    }).compileComponents();

    fixture = TestBed.createComponent(YearAccordion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
