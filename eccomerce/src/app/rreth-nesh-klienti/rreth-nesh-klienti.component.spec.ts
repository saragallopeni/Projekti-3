import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrethNeshKlientiComponent } from './rreth-nesh-klienti.component';

describe('RrethNeshKlientiComponent', () => {
  let component: RrethNeshKlientiComponent;
  let fixture: ComponentFixture<RrethNeshKlientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RrethNeshKlientiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RrethNeshKlientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
