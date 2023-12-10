import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecesComponent } from './pieces.component';

describe('PiecesComponent', () => {
  let component: PiecesComponent;
  let fixture: ComponentFixture<PiecesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PiecesComponent]
    });
    fixture = TestBed.createComponent(PiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
