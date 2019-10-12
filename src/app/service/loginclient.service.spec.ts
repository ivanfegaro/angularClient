import { TestBed, inject } from '@angular/core/testing';

import { LoginclientService } from './loginclient.service';

describe('LoginclientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginclientService]
    });
  });

  it('should be created', inject([LoginclientService], (service: LoginclientService) => {
    expect(service).toBeTruthy();
  }));
});
