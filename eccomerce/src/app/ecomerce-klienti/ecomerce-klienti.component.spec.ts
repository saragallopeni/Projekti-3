import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomerceKlientiComponent } from './ecomerce-klienti.component';

describe('EcomerceKlientiComponent', () => {
  let component: EcomerceKlientiComponent;
  let fixture: ComponentFixture<EcomerceKlientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EcomerceKlientiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcomerceKlientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
