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

  // oscarList: Oscar[] = [
  //   new Oscar('Best Picture', 'Green Book', 'Jim Burke, Charles B. Wessler, Brian Currie, Peter Farrelly, and Nick Vallelonga', new Date("Feb, 24,2019, 20:00:00 EST"), '../assets/greenbook.jpg'),
  //   new Oscar('Best Actress', 'The Favourite', 'Olivia Colman', new Date("Feb, 24,2019, 20:00:00 EST"), "../assets/oliviacolman.jpg"),
  //   new Oscar('Best Documentary Short', 'Period. End of Sentence', 'Rayka Zehtabchi and Melissa Berton', new Date("Feb 24,2019 20:00:00 EST"), "../assets/period.jpg")
  // ];

  goToDetailPage(clickedWinner: Oscar){
    //this.router.navigate(['oscars', clickedWinner.$key])
  }
}
