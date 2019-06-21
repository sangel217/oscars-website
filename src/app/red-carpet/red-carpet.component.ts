import { Component, OnInit } from '@angular/core';
import { RedCarpetService } from '../red-carpet.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { RedCarpet } from '../models/red-carpet.models';

@Component({
  selector: 'app-red-carpet',
  templateUrl: './red-carpet.component.html',
  styleUrls: ['./red-carpet.component.css'],
  providers: [RedCarpetService]
})
export class RedCarpetComponent implements OnInit {
  redCarpets: FirebaseListObservable<any[]>;

  constructor(private router: Router, private redCarpetService: RedCarpetService) { }

  ngOnInit() {
    this.redCarpets = this.redCarpetService.getRedCarpets();
  }

  goToDetailPage(clickedRedCarpet: RedCarpet){
    // this.router.navigate(['redCarpets', clickedRedCarpet.$key])
  }

}
