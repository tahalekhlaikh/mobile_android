import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UsagerService} from '../services/usager.service';
import {NavController} from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-informations',
  templateUrl: './informations.page.html',
  styleUrls: ['./informations.page.scss'],
})
export class InformationsPage implements OnInit {

  constructor(private usagerService:UsagerService,private navCtl:NavController,public storage: Storage) { }

  ngOnInit() {
  }

  register(userForm: NgForm) {

    this.usagerService.addUsagers(userForm.value).subscribe((result:any)=>{

      this.storage.set("preference",userForm.value['preference'])
      this.navCtl.navigateForward('/voyages')
    })
  }
}
