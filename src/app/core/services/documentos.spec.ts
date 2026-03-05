import { TestBed } from '@angular/core/testing';

import { Documentos } from './documentos';

describe('Documentos', () => {
  let service: Documentos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Documentos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
