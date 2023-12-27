import { TestBed } from '@angular/core/testing';

import { LaptopInfoService } from './laptop-info.service';

describe('LaptopInfoService', () => {
  let service: LaptopInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaptopInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
