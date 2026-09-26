import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterAccordion } from './semester-accordion';

describe('SemesterAccordion', () => {
  let component: SemesterAccordion;
  let fixture: ComponentFixture<SemesterAccordion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemesterAccordion],
    }).compileComponents();

    fixture = TestBed.createComponent(SemesterAccordion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
