import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A820EmployeeCrud } from './a8-20-employee-crud';

describe('A820EmployeeCrud', () => {
  let component: A820EmployeeCrud;
  let fixture: ComponentFixture<A820EmployeeCrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A820EmployeeCrud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A820EmployeeCrud);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
