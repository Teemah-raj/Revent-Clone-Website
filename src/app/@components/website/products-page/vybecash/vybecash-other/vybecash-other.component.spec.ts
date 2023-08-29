import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VybecashOtherComponent } from './vybecash-other.component';

describe('VybecashOtherComponent', () => {
  let component: VybecashOtherComponent;
  let fixture: ComponentFixture<VybecashOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VybecashOtherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VybecashOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
