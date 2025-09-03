import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileComp } from './file-comp';

describe('FileComp', () => {
  let component: FileComp;
  let fixture: ComponentFixture<FileComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
