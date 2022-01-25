import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesReservationsPageRoutingModule } from './mes-reservations-routing.module';

import { MesReservationsPage } from './mes-reservations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesReservationsPageRoutingModule
  ],
  declarations: [MesReservationsPage]
})
export class MesReservationsPageModule {}
