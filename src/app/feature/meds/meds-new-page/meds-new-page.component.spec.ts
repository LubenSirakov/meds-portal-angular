import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedsNewPageComponent } from './meds-new-page.component';

describe('MedsNewPageComponent', () => {
  let component: MedsNewPageComponent;
  let fixture: ComponentFixture<MedsNewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedsNewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedsNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
