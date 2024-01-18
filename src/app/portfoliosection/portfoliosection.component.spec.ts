import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliosectionComponent } from './portfoliosection.component';

describe('PortfoliosectionComponent', () => {
  let component: PortfoliosectionComponent;
  let fixture: ComponentFixture<PortfoliosectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfoliosectionComponent]
    });
    fixture = TestBed.createComponent(PortfoliosectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
