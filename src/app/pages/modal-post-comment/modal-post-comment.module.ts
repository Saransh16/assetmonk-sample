import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPostCommentPageRoutingModule } from './modal-post-comment-routing.module';

import { ModalPostCommentPage } from './modal-post-comment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPostCommentPageRoutingModule
  ],
  declarations: [ModalPostCommentPage]
})
export class ModalPostCommentPageModule {}
