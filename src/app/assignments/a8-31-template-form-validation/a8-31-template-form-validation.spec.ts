import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A831TemplateFormValidation } from './a8-31-template-form-validation';

describe('A831TemplateFormValidation', () => {
  let component: A831TemplateFormValidation;
  let fixture: ComponentFixture<A831TemplateFormValidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A831TemplateFormValidation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A831TemplateFormValidation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
