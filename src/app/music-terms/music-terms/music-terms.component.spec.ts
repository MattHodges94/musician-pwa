import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicTermsComponent } from './music-terms.component';

describe('MusicTermsComponent', () => {
  let component: MusicTermsComponent;
  let fixture: ComponentFixture<MusicTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
