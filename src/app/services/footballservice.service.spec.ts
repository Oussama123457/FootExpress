import { TestBed } from '@angular/core/testing';

import { FootballService} from '../services/footballservice.service'

describe('FootballserviceService', () => {
  let service: FootballService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootballService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
