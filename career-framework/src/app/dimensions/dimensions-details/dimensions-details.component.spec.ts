import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionsDetailsComponent } from './dimensions-details.component';

describe('DimensionsDetailsComponent', () => {
  let component: DimensionsDetailsComponent;
  let fixture: ComponentFixture<DimensionsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DimensionsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DimensionsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
