import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScaleListComponent } from './add-scale-list.component';

describe('AddScaleListComponent', () => {
  let component: AddScaleListComponent;
  let fixture: ComponentFixture<AddScaleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddScaleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
