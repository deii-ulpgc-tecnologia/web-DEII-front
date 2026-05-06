import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeAccordion } from './degree-accordion';

describe('DegreeAccordion', () => {
  let component: DegreeAccordion;
  let fixture: ComponentFixture<DegreeAccordion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DegreeAccordion],
    }).compileComponents();

    fixture = TestBed.createComponent(DegreeAccordion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
