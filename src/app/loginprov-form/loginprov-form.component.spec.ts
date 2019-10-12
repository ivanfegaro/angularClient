import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginprovFormComponent } from './loginprov-form.component';

describe('LoginprovFormComponent', () => {
  let component: LoginprovFormComponent;
  let fixture: ComponentFixture<LoginprovFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginprovFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginprovFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
