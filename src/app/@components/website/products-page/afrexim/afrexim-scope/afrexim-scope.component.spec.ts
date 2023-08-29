import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfreximScopeComponent } from './afrexim-scope.component';

describe('AfreximScopeComponent', () => {
  let component: AfreximScopeComponent;
  let fixture: ComponentFixture<AfreximScopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfreximScopeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfreximScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
