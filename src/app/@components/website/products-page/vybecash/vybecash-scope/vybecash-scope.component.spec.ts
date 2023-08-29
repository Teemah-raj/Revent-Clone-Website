import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VybecashScopeComponent } from './vybecash-scope.component';

describe('VybecashScopeComponent', () => {
  let component: VybecashScopeComponent;
  let fixture: ComponentFixture<VybecashScopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VybecashScopeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VybecashScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
