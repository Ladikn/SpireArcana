import { TestBed, inject } from '@angular/core/testing';

import { MainLoopService } from './main-loop.service';

describe('MainLoopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainLoopService]
    });
  });

  it('should be created', inject([MainLoopService], (service: MainLoopService) => {
    expect(service).toBeTruthy();
  }));
});
