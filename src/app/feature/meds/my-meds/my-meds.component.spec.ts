import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMedsComponent } from './my-meds.component';

describe('MyMedsComponent', () => {
  let component: MyMedsComponent;
  let fixture: ComponentFixture<MyMedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyMedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
