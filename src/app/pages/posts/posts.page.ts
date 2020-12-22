import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { PostService } from 'src/app/services/post.service';
import { ModalPostCommentPage } from '../modal-post-comment/modal-post-comment.page';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  posts : any = [];

  constructor(
    private loadingController : LoadingController,
    private postService : PostService,
    private modalController : ModalController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getPosts();
  }

  getPosts() {

    this.loadingController.create({
      message : 'Fetching Posts...'
    })
    .then((loading) => {
      loading.present();
      this.postService.getPosts()
      .then((response : any) => {
        loading.dismiss();
        console.log(response);
        this.posts = response.data;
      },
      (error) => {
        loading.dismiss();
        console.log(error.response);
      });
    });
  }

  async viewComments(post) {
    const modal = await this.modalController.create({
      component : ModalPostCommentPage,
      componentProps : {
        id : post.id,
        title : post.title
      }
    });

    return await modal.present();
  }
}
