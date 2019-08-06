/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DvdService } from './Dvd.service';

describe('Service: Dvd', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DvdService]
    });
  });

  it('should ...', inject([DvdService], (service: DvdService) => {
    expect(service).toBeTruthy();
  }));
});
