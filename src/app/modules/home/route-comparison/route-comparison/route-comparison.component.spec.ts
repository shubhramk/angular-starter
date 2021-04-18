import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteComparisonComponent } from './route-comparison.component';

describe('RouteDetailComponent', () => {
  let component: RouteComparisonComponent;
  let fixture: ComponentFixture<RouteComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteComparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
