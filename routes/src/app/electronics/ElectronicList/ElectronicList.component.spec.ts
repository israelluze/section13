/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ElectronicListComponent } from './ElectronicList.component';

describe('ElectronicListComponent', () => {
  let component: ElectronicListComponent;
  let fixture: ComponentFixture<ElectronicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
