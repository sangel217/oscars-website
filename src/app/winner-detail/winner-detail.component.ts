import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Oscar } from '../models/oscar.models';
import { OscarService } from '../oscar.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-winner-detail',
  templateUrl: './winner-detail.component.html',
  styleUrls: ['./winner-detail.component.css'],
  providers: [OscarService]
})
export class WinnerDetailComponent implements OnInit {
  oscarId: string;
  oscarToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private oscarService: OscarService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.oscarId = urlParameters['id'];
    });
    this.oscarToDisplay = this.oscarService.getOscarById(this.oscarId);
   }

}
