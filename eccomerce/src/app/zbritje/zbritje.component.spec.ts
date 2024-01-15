import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZbritjeComponent } from './zbritje.component';

describe('ZbritjeComponent', () => {
  let component: ZbritjeComponent;
  let fixture: ComponentFixture<ZbritjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZbritjeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZbritjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
