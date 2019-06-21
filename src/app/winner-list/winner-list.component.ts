import { Component, Input, Output, OnInit } from '@angular/core';
import { Oscar } from '../models/oscar.models';
import { Router } from '@angular/router';
import { OscarService } from '../oscar.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-winner-list',
  templateUrl: './winner-list.component.html',
  styleUrls: ['./winner-list.component.css'],
  providers: [OscarService]
})
export class WinnerListComponent implements OnInit {
  oscars: FirebaseListObservable<any[]>;

  constructor(private router: Router, private oscarService: OscarService) {}

  ngOnInit(){
    this.oscars = this.oscarService.getOscars();
  }

  goToDetailPage(clickedWinner: Oscar){
    this.router.navigate(['oscars', clickedWinner.$key])
  }
}
