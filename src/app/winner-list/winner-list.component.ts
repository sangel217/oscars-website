import { Component, Input, Output } from '@angular/core';
import { Oscar } from '../models/oscar.models';

@Component({
  selector: 'app-winner-list',
  templateUrl: './winner-list.component.html',
  styleUrls: ['./winner-list.component.css']
})
export class WinnerListComponent {
  oscarList: Oscar[] = [
    new Oscar('Best Picture', 'Green Book', 'Jim Burke, Charles B. Wessler, Brian Currie, Peter Farrelly, and Nick Vallelonga', new Date("Feb, 24,2019, 20:00:00 EST"), '../assets/greenbook.jpg'),
    new Oscar('Best Actress', 'The Favourite', 'Olivia Colman', new Date("Feb, 24,2019, 20:00:00 EST"), "../assets/oliviacolman.jpg"),
    new Oscar('Best Documentary Short', 'Period. End of Sentence', 'Rayka Zehtabchi and Melissa Berton', new Date("Feb 24,2019 20:00:00 EST"), "../assets/period.jpg")
  ];


}
