import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SherbimiKlientiComponent } from './sherbimi-klienti.component';

describe('SherbimiKlientiComponent', () => {
  let component: SherbimiKlientiComponent;
  let fixture: ComponentFixture<SherbimiKlientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SherbimiKlientiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SherbimiKlientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
