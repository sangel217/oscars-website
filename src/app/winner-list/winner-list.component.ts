import { Component, Input, Output } from '@angular/core';
import { Oscar } from '../models/oscar.models';

@Component({
  selector: 'app-winner-list',
  templateUrl: './winner-list.component.html',
  styleUrls: ['./winner-list.component.css']
})
export class WinnerListComponent {
  @Input() childOscarList: Oscar[];

}
