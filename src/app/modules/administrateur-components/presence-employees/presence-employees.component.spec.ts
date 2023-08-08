import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceEmployeesComponent } from './presence-employees.component';

describe('PresenceEmployeesComponent', () => {
  let component: PresenceEmployeesComponent;
  let fixture: ComponentFixture<PresenceEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresenceEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresenceEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
