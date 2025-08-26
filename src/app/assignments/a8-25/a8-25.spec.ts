import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A825 } from './a8-25';

describe('A825', () => {
  let component: A825;
  let fixture: ComponentFixture<A825>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A825]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A825);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
