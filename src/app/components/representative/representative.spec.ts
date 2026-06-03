import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Representative } from './representative';

describe('Representative', () => {
  let component: Representative;
  let fixture: ComponentFixture<Representative>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Representative],
    }).compileComponents();

    fixture = TestBed.createComponent(Representative);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
