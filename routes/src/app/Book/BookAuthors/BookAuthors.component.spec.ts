/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookAuthorsComponent } from './BookAuthors.component';

describe('BookAuthorsComponent', () => {
  let component: BookAuthorsComponent;
  let fixture: ComponentFixture<BookAuthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAuthorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
