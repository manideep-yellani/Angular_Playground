import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A91FolderStructure } from './a9-1-folder-structure';

describe('A91FolderStructure', () => {
  let component: A91FolderStructure;
  let fixture: ComponentFixture<A91FolderStructure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A91FolderStructure]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A91FolderStructure);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
