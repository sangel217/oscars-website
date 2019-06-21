import { Component, OnInit } from '@angular/core';
import { RedCarpetService } from '../red-carpet.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-red-carpet-detail',
  templateUrl: './red-carpet-detail.component.html',
  styleUrls: ['./red-carpet-detail.component.css'],
  providers: [RedCarpetService]
})
export class RedCarpetDetailComponent implements OnInit {
  redCarpetId: string;
  redCarpetToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private redCarpetService: RedCarpetService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.redCarpetId = urlParameters['id'];
    });
    this.redCarpetToDisplay = this.redCarpetService.getRedCarpetById(this.redCarpetId);
  }

}
