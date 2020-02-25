import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionItemComponent } from './dimension-item.component';

describe('DimensionItemComponent', () => {
  let component: DimensionItemComponent;
  let fixture: ComponentFixture<DimensionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DimensionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DimensionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
