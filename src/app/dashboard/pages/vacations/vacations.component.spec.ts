import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationsComponent } from './vacations.component';
import { expect } from '@angular/platform-browser/testing/src/matchers';
import { describe } from '@angular/core/testing/src/testing_internal';

describe('VacationsComponent', () => {
  let component: VacationsComponent;
  let fixture: ComponentFixture<VacationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
