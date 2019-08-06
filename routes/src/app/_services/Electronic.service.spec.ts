/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ElectronicService } from './Electronic.service';

describe('Service: Electronic', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElectronicService]
    });
  });

  it('should ...', inject([ElectronicService], (service: ElectronicService) => {
    expect(service).toBeTruthy();
  }));
});
