import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asignatures } from './asignatures';

describe('Asignatures', () => {
  let component: Asignatures;
  let fixture: ComponentFixture<Asignatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Asignatures],
    }).compileComponents();

    fixture = TestBed.createComponent(Asignatures);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
