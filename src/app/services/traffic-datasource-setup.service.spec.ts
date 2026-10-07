import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TrafficDatasourceSetupService } from './traffic-datasource-setup.service';

describe('TrafficDatasourceSetupService', () => {
  let service: TrafficDatasourceSetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(TrafficDatasourceSetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
