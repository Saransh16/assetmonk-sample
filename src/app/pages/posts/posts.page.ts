import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { PostService } from 'src/app/services/post.service';

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

  viewComments(id) {
    console.log(id);
  }

}
