import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDocument } from './upload-document';

describe('UploadDocument', () => {
  let component: UploadDocument;
  let fixture: ComponentFixture<UploadDocument>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadDocument]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadDocument);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
