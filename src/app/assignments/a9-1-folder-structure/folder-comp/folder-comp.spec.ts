import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderComp } from './folder-comp';

describe('FolderComp', () => {
  let component: FolderComp;
  let fixture: ComponentFixture<FolderComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FolderComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolderComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
