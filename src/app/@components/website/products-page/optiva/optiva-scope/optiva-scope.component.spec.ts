import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptivaScopeComponent } from './optiva-scope.component';

describe('OptivaScopeComponent', () => {
  let component: OptivaScopeComponent;
  let fixture: ComponentFixture<OptivaScopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptivaScopeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptivaScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
