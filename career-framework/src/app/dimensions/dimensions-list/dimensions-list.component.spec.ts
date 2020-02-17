import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionsListComponent } from './dimensions-list.component';

describe('DimensionsListComponent', () => {
  let component: DimensionsListComponent;
  let fixture: ComponentFixture<DimensionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DimensionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DimensionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
