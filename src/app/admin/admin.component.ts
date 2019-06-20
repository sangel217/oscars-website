import { Component, OnInit } from '@angular/core';
import { OscarService } from '../oscar.service';
import { Oscar } from '../models/oscar.models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [OscarService]
})
export class AdminComponent implements OnInit {

  constructor(private oscarService: OscarService) { }

  ngOnInit() {
  }

  submitWinner(category: string, movie: string, name: string, oscarYear: Date, image: string){
    var newOscar: Oscar = new Oscar(category, movie, name, oscarYear, image);
    this.oscarService.addOscar(newOscar);
  }

}
