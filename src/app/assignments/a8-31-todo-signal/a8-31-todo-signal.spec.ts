import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A831TodoSignal } from './a8-31-todo-signal';

describe('A831TodoSignal', () => {
  let component: A831TodoSignal;
  let fixture: ComponentFixture<A831TodoSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A831TodoSignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A831TodoSignal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
