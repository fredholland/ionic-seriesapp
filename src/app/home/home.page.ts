import { Component, OnInit } from '@angular/core';
import { SeriesService } from './../services/series.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  series = [];

  constructor(private seriesService: SeriesService) {}

  ngOnInit() {
    this.loadSeries();
  }

  loadSeries() {
    this.seriesService
      .getSeries()
      .subscribe(res => {
        this.series = [...this.series, ...res];
      });
  }

}
