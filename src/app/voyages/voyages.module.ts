import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoyagesPageRoutingModule } from './voyages-routing.module';

import { VoyagesPage } from './voyages.page';
import {ResultatsPageModule} from '../resultats/resultats.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        VoyagesPageRoutingModule,
        ResultatsPageModule
    ],
  declarations: [VoyagesPage]
})
export class VoyagesPageModule {}
