import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {StationsService} from '../services/stations.service';
import {VoyagesService} from '../services/voyages.service';
import {Observable, Subject} from 'rxjs';
import {Storage} from '@ionic/storage';
import {valueReferenceToExpression} from '@angular/compiler-cli/src/ngtsc/annotations/src/util';

@Component({
  selector: 'app-voyages',
  templateUrl: './voyages.page.html',
  styleUrls: ['./voyages.page.css'],
})
export class VoyagesPage implements OnInit {
  stations : Array<any>
  voyages : Array<any>
  date = new Date(Date.now()).toJSON()
  voyageObserver = new Subject<Array<any>>();
  isSpinner : boolean =true
  preference : string
  constructor(private stationsService:StationsService,private voyagesService:VoyagesService,public storage:Storage) { }

  ngOnInit() {
    this.storage.get("preference").then((value => {
    this.preference=value
    }));
    this.stationsService.getAllStations().subscribe((stations:Array<any>)=>{

      this.stations=stations
    })
    this.voyagesService.getAllVoyages().subscribe((results:Array<any>)=>{
      this.isSpinner=false
      this.voyages=results
    })
    this.voyageObserver.asObservable().subscribe((result:Array<any>)=>{

      this.voyages=result
    })
  }

  onSearchVoyage(form: NgForm) {
    this.isSpinner=true
    form.value['dateDepart']=new Date(form.value['dateDepart']).toJSON()
    this.voyagesService.getVoyageBySearch(form.value).subscribe((results:Array<any>)=>{

      this.voyageObserver.next(results)
      this.isSpinner=false
    })
  }



}
