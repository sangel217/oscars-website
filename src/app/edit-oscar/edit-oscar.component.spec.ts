import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOscarComponent } from './edit-oscar.component';

describe('EditOscarComponent', () => {
  let component: EditOscarComponent;
  let fixture: ComponentFixture<EditOscarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOscarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
