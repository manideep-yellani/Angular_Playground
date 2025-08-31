import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A830EmployeeSubject } from './a8-30-employee-subject';

describe('A830EmployeeSubject', () => {
  let component: A830EmployeeSubject;
  let fixture: ComponentFixture<A830EmployeeSubject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A830EmployeeSubject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A830EmployeeSubject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
