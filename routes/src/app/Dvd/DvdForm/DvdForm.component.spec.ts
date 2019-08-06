/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DvdFormComponent } from './DvdForm.component';

describe('DvdFormComponent', () => {
  let component: DvdFormComponent;
  let fixture: ComponentFixture<DvdFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvdFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
