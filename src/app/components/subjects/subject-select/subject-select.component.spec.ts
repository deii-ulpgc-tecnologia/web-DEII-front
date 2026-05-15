import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectSelectComponent } from './subject-select.component';

describe('SubjectSelect', () => {
  let component: SubjectSelectComponent;
  let fixture: ComponentFixture<SubjectSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectSelectComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
