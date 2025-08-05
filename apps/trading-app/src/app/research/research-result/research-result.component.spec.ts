import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchResultComponent } from './research-result.component';

describe('ResearchResultComponent', () => {
  let component: ResearchResultComponent;
  let fixture: ComponentFixture<ResearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResearchResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
