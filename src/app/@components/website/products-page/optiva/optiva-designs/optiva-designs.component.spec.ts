import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptivaDesignsComponent } from './optiva-designs.component';

describe('OptivaDesignsComponent', () => {
  let component: OptivaDesignsComponent;
  let fixture: ComponentFixture<OptivaDesignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptivaDesignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptivaDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
