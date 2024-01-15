import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SherbimiComponent } from './sherbimi.component';

describe('SherbimiComponent', () => {
  let component: SherbimiComponent;
  let fixture: ComponentFixture<SherbimiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SherbimiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SherbimiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
