import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A824 } from './a8-24';

describe('A824', () => {
  let component: A824;
  let fixture: ComponentFixture<A824>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A824]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A824);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
