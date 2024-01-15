import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QasjaComponent } from './qasja.component';

describe('QasjaComponent', () => {
  let component: QasjaComponent;
  let fixture: ComponentFixture<QasjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QasjaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QasjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
