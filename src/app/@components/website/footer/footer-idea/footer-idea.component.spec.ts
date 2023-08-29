import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterIdeaComponent } from './footer-idea.component';

describe('FooterIdeaComponent', () => {
  let component: FooterIdeaComponent;
  let fixture: ComponentFixture<FooterIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterIdeaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
