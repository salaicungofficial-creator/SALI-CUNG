import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AdminQueueDatasourceService } from './admin-queue-datasource.service';

describe('AdminQueueDatasourceService', () => {
  let service: AdminQueueDatasourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(AdminQueueDatasourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
