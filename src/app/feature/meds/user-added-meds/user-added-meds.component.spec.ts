import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddedMedsComponent } from './user-added-meds.component';

describe('UserAddedMedsComponent', () => {
  let component: UserAddedMedsComponent;
  let fixture: ComponentFixture<UserAddedMedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddedMedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddedMedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
