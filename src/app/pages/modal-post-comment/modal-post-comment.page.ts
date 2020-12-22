import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-modal-post-comment',
  templateUrl: './modal-post-comment.page.html',
  styleUrls: ['./modal-post-comment.page.scss'],
})
export class ModalPostCommentPage implements OnInit {

  id;
  comments : any = [];
  showSpinner : Boolean = true;

  constructor(
    private modalController : ModalController,
    private postService : PostService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {

    this.showSpinner = true;
    this.postService.getComments(this.id)
    .then((response : any) => {
      this.showSpinner = false;
      console.log(response);
      this.comments = response.data;
    },
    (error) => {
      this.showSpinner = false;
      console.log(error.response);
    });
  }

  dismissModal() {
    this.modalController.dismiss();
  }

}
