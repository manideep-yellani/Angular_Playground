import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A821 } from './a8-21';

describe('A821', () => {
  let component: A821;
  let fixture: ComponentFixture<A821>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A821]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A821);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
