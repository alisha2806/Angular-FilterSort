import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileScreeningComponent } from './profile-screening.component';

describe('ProfileScreeningComponent', () => {
  let component: ProfileScreeningComponent;
  let fixture: ComponentFixture<ProfileScreeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileScreeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
