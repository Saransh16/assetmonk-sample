import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalViewFullImagePageRoutingModule } from './modal-view-full-image-routing.module';

import { ModalViewFullImagePage } from './modal-view-full-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalViewFullImagePageRoutingModule
  ],
  declarations: [ModalViewFullImagePage]
})
export class ModalViewFullImagePageModule {}
