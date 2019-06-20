import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedCarpetDetailComponent } from './red-carpet-detail.component';

describe('RedCarpetDetailComponent', () => {
  let component: RedCarpetDetailComponent;
  let fixture: ComponentFixture<RedCarpetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedCarpetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedCarpetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
