import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginclientFormComponent } from './loginclient-form.component';

describe('LoginclientFormComponent', () => {
  let component: LoginclientFormComponent;
  let fixture: ComponentFixture<LoginclientFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginclientFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginclientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
