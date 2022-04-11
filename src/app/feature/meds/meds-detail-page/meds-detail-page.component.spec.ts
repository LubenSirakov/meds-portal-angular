import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedsDetailPageComponent } from './meds-detail-page.component';

describe('MedsDetailPageComponent', () => {
  let component: MedsDetailPageComponent;
  let fixture: ComponentFixture<MedsDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedsDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
