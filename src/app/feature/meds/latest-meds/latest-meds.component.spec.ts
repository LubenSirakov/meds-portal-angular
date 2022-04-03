import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestMedsComponent } from './latest-meds.component';

describe('LatestMedsComponent', () => {
  let component: LatestMedsComponent;
  let fixture: ComponentFixture<LatestMedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestMedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestMedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
