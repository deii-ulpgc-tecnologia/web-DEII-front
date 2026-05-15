import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Docs } from './docs';

describe('Docs', () => {
  let component: Docs;
  let fixture: ComponentFixture<Docs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Docs],
    }).compileComponents();

    fixture = TestBed.createComponent(Docs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
