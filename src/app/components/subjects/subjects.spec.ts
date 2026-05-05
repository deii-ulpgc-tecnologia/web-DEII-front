import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subjects } from './subjects';

describe('Subjects', () => {
  let component: Subjects;
  let fixture: ComponentFixture<Subjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subjects],
    }).compileComponents();

    fixture = TestBed.createComponent(Subjects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
