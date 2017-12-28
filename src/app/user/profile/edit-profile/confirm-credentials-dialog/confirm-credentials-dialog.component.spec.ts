import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCredentialsDialogComponent } from './confirm-credentials-dialog.component';

describe('ConfirmCredentialsDialogComponent', () => {
  let component: ConfirmCredentialsDialogComponent;
  let fixture: ComponentFixture<ConfirmCredentialsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmCredentialsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmCredentialsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
