import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVybecashComponent } from './product-vybecash.component';

describe('ProductVybecashComponent', () => {
  let component: ProductVybecashComponent;
  let fixture: ComponentFixture<ProductVybecashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductVybecashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductVybecashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
