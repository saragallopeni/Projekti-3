import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterKlientiComponent } from './footer-klienti.component';

describe('FooterKlientiComponent', () => {
  let component: FooterKlientiComponent;
  let fixture: ComponentFixture<FooterKlientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterKlientiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterKlientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
