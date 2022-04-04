import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedsListLitemComponent } from './meds-list-litem.component';

describe('MedsListLitemComponent', () => {
  let component: MedsListLitemComponent;
  let fixture: ComponentFixture<MedsListLitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedsListLitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedsListLitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
