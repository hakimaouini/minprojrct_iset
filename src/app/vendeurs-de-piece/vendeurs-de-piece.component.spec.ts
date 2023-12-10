import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendeursDePieceComponent } from './vendeurs-de-piece.component';

describe('VendeursDePieceComponent', () => {
  let component: VendeursDePieceComponent;
  let fixture: ComponentFixture<VendeursDePieceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendeursDePieceComponent]
    });
    fixture = TestBed.createComponent(VendeursDePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
