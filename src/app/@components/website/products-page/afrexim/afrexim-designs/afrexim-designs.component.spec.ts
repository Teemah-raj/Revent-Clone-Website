import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfreximDesignsComponent } from './afrexim-designs.component';

describe('AfreximDesignsComponent', () => {
  let component: AfreximDesignsComponent;
  let fixture: ComponentFixture<AfreximDesignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfreximDesignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfreximDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
