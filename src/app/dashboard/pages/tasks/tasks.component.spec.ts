import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { expect } from '@angular/platform-browser/testing/src/matchers';
import { describe } from '@angular/core/testing/src/testing_internal';
import { TasksComponent } from './tasks.component';


describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
