import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VybecashResultsComponent } from './vybecash-results.component';

describe('VybecashResultsComponent', () => {
  let component: VybecashResultsComponent;
  let fixture: ComponentFixture<VybecashResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VybecashResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VybecashResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
