import { Component, OnInit } from '@angular/core';
import { SeriesService } from './../services/series.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  serieDetails: any;

  constructor(
    private seriesService: SeriesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    let index = this.route.snapshot.paramMap.get('index');

    this.seriesService
      .getSerie(index)
      .subscribe(res => {
        this.serieDetails = res['tvShow'];
      })

  }

}
