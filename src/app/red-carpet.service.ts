import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { RedCarpet } from './models/red-carpet.models';

@Injectable()
export class RedCarpetService {
  redCarpets: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) { 
    this.redCarpets = database.list('redCarpets');
  }

  getRedCarpets(){
    return this.redCarpets;
  }

  addRedCarpet(newRedCarpet: RedCarpet){
    this.redCarpets.push(newRedCarpet);
  }

  getRedCarpetById(redCarpetId: string){
    return this.database.object('redCarpets/' + redCarpetId)
  }

}
