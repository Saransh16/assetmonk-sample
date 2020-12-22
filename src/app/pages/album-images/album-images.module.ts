import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlbumImagesPageRoutingModule } from './album-images-routing.module';

import { AlbumImagesPage } from './album-images.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlbumImagesPageRoutingModule
  ],
  declarations: [AlbumImagesPage]
})
export class AlbumImagesPageModule {}
