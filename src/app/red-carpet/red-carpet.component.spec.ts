import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedCarpetComponent } from './red-carpet.component';

describe('RedCarpetComponent', () => {
  let component: RedCarpetComponent;
  let fixture: ComponentFixture<RedCarpetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedCarpetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedCarpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
