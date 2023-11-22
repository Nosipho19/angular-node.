import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplayBoardComponentComponent } from './diplay-board-component.component';

describe('DiplayBoardComponentComponent', () => {
  let component: DiplayBoardComponentComponent;
  let fixture: ComponentFixture<DiplayBoardComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiplayBoardComponentComponent]
    });
    fixture = TestBed.createComponent(DiplayBoardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
