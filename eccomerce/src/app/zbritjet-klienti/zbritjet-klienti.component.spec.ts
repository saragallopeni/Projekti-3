import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZbritjetKlientiComponent } from './zbritjet-klienti.component';

describe('ZbritjetKlientiComponent', () => {
  let component: ZbritjetKlientiComponent;
  let fixture: ComponentFixture<ZbritjetKlientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZbritjetKlientiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZbritjetKlientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
