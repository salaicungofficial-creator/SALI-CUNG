import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxAvatarComponent, IgxIconComponent } from 'igniteui-angular';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexLegend, ApexMarkers, ApexStroke, ApexTheme, ApexTitleSubtitle, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';
import { Subject, takeUntil } from 'rxjs';
import { ActiveQueueType } from '../models/admin-queue-datasource/active-queue-type';
import { TrafficEPType } from '../models/traffic-datasource-setup/traffic-eptype';
import { AdminQueueDatasourceService } from '../services/admin-queue-datasource.service';
import { TrafficDatasourceSetupService } from '../services/traffic-datasource-setup.service';

@Component({
  selector: 'app-admin-overview',
  imports: [IGX_CARD_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, ChartComponent],
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.scss']
})
export class AdminOverviewComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  private _trafficEP: TrafficEPType[] = [];
  public get trafficEP(): TrafficEPType[] {
    return this._trafficEP;
  }
  public set trafficEP(value: TrafficEPType[]) {
    this._trafficEP = value;
    this.series = this.getSeries();
  }
  public series: ApexAxisChartSeries = this.getSeries();
  public chart: ApexChart = {
    type: 'area',
    background: 'theme:surface-500',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: true
    },
    fontFamily: 'var(--ig-font-family)'
  };
  public stroke: ApexStroke = {
    curve: 'monotoneCubic'
  };
  public title: ApexTitleSubtitle = {
    text: 'Engine Load'
  };
  public xaxis: ApexXAxis = {
    title: {
      text: 'Hour of Day'
    }
  };
  public yaxis: ApexYAxis = {
    title: {
      text: 'Requests Counts'
    }
  };
  public theme: ApexTheme = {
    mode: 'dark'
  };
  public legend: ApexLegend = {
    show: true
  };
  public markers: ApexMarkers = {
    size: 6
  };
  public dataLabels: ApexDataLabels = {
    enabled: false
  };
  public adminQueueDatasourceActiveQueue: ActiveQueueType[] = [];

  constructor(
    public trafficDatasourceSetupService: TrafficDatasourceSetupService,
    public adminQueueDatasourceService: AdminQueueDatasourceService,
  ) {}


  ngOnInit() {
    this.trafficDatasourceSetupService.getTrafficEP().pipe(takeUntil(this.destroy$)).subscribe(
      data => {
        this.trafficEP = data;
        this.changeDetectorRef.markForCheck();
      }
    );
    this.adminQueueDatasourceService.getActiveQueue().pipe(takeUntil(this.destroy$)).subscribe(
      data => {
        this.adminQueueDatasourceActiveQueue = data;
        this.changeDetectorRef.markForCheck();
      }
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getSeries(): ApexAxisChartSeries {
    return [
      {
        name: 'ImageEngine',
        data: this.trafficEP,
        parsing: {
          x: 'Hour',
          y: [
            'ImageEngine'
          ]
        }
      },
      {
        name: 'TextEngine',
        data: this.trafficEP,
        parsing: {
          x: 'Hour',
          y: [
            'TextEngine'
          ]
        }
      }
    ];
  }
}
