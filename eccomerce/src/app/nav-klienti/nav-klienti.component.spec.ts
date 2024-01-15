import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavKlientiComponent } from './nav-klienti.component';

describe('NavKlientiComponent', () => {
  let component: NavKlientiComponent;
  let fixture: ComponentFixture<NavKlientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavKlientiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavKlientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
