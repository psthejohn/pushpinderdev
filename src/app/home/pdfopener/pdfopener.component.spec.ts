import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfopenerComponent } from './pdfopener.component';

describe('PdfopenerComponent', () => {
  let component: PdfopenerComponent;
  let fixture: ComponentFixture<PdfopenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfopenerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfopenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
