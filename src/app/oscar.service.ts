import { Injectable } from '@angular/core';
import { Oscar } from './models/oscar.models';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class OscarService {
  oscars: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) { 
    this.oscars = database.list('oscars');
  }

  getOscars(){
    return this.oscars;
  }

  addOscar(newOscar: Oscar){
    this.oscars.push(newOscar);
  }

  getOscarById(oscarId: string){
    return this.database.object('oscars/' + oscarId);
  }

}
