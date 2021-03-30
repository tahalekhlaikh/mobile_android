import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformationsPageRoutingModule } from './informations-routing.module';

import { InformationsPage } from './informations.page';
import {IonicStorageModule} from '@ionic/Storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformationsPageRoutingModule,
  ],
  declarations: [InformationsPage]
})
export class InformationsPageModule {}
