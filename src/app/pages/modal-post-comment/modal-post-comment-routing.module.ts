import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPostCommentPage } from './modal-post-comment.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPostCommentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPostCommentPageRoutingModule {}
