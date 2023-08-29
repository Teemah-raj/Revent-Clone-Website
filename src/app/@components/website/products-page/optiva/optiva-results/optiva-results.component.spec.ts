import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptivaResultsComponent } from './optiva-results.component';

describe('OptivaResultsComponent', () => {
  let component: OptivaResultsComponent;
  let fixture: ComponentFixture<OptivaResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptivaResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptivaResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
