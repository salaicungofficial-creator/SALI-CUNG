import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TrafficEPType } from '../models/traffic-datasource-setup/traffic-eptype';
import { TrafficDatasourceSetup } from '../static-data/traffic-datasource-setup';

@Injectable({
  providedIn: 'root'
})
export class TrafficDatasourceSetupService {
  public getTrafficEP(): Observable<TrafficEPType[]> {
    return of(TrafficDatasourceSetup['TrafficEPType']);
  }
}
