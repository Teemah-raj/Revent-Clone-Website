import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VybecashDesignsComponent } from './vybecash-designs.component';

describe('VybecashDesignsComponent', () => {
  let component: VybecashDesignsComponent;
  let fixture: ComponentFixture<VybecashDesignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VybecashDesignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VybecashDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
