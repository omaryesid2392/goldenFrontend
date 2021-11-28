import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosRegistroComponent } from './registro.component';

describe('RegistroComponent', () => {
  let component: ProductosRegistroComponent;
  let fixture: ComponentFixture<ProductosRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
