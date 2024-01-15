import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaproduktitComponent } from './listaproduktit.component';

describe('ListaproduktitComponent', () => {
  let component: ListaproduktitComponent;
  let fixture: ComponentFixture<ListaproduktitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaproduktitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaproduktitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
