import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectSelect } from './subject-select';

describe('SubjectSelect', () => {
  let component: SubjectSelect;
  let fixture: ComponentFixture<SubjectSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectSelect],
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectSelect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
