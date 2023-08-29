import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfreximResultsComponent } from './afrexim-results.component';

describe('AfreximResultsComponent', () => {
  let component: AfreximResultsComponent;
  let fixture: ComponentFixture<AfreximResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfreximResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfreximResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
