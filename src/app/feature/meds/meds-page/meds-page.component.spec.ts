import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedsPageComponent } from './meds-page.component';

describe('MedsPageComponent', () => {
  let component: MedsPageComponent;
  let fixture: ComponentFixture<MedsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
