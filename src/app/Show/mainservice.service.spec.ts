/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MainserviceService } from './mainservice.service';

describe('Service: Mainservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainserviceService]
    });
  });

  it('should ...', inject([MainserviceService], (service: MainserviceService) => {
    expect(service).toBeTruthy();
  }));
});
