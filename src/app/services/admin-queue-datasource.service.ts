import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActiveQueueType } from '../models/admin-queue-datasource/active-queue-type';
import { AdminQueueDatasource } from '../static-data/admin-queue-datasource';

@Injectable({
  providedIn: 'root'
})
export class AdminQueueDatasourceService {
  public getActiveQueue(): Observable<ActiveQueueType[]> {
    return of(AdminQueueDatasource['ActiveQueueType']);
  }
}
