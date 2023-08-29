import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfreximOtherComponent } from './afrexim-other.component';

describe('AfreximOtherComponent', () => {
  let component: AfreximOtherComponent;
  let fixture: ComponentFixture<AfreximOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfreximOtherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfreximOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
