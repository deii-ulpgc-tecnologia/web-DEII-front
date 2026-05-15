import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentoForm } from './documento-form';

describe('DocumentoForm', () => {
  let component: DocumentoForm;
  let fixture: ComponentFixture<DocumentoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentoForm],
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentoForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
