import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChampionPageRoutingModule } from './champion-routing.module';

import { ChampionPage } from './champion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChampionPageRoutingModule
  ],
  declarations: [ChampionPage]
})
export class ChampionPageModule {}
