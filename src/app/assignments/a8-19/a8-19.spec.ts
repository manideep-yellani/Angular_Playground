import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A819 } from './a8-19';

describe('A819', () => {
  let component: A819;
  let fixture: ComponentFixture<A819>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A819]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A819);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
